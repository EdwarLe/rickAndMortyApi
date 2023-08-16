import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import ModalEmptySearch from "./components/ModalEmptySearch";
import { useCatchErrors } from "./utils/hooks/useCatchErrors";
import FirstScreen from "./components/FirstScreen";

const EMPTY_DIMENSION = 12;

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const {
    emptySearch,
    handleCloseModal,
    emptyError,
    error404,
    error404Modal,
    isLoading,
    loaderScreen,
  } = useCatchErrors(true);

  const btnGoToUp = () => {
    const buttonUp = document.querySelector('.bx-chevron-up-circle')
    buttonUp.addEventListener('click', () => window.scrollTo(0, 0))
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    newLocation === ""
    ? emptyError() & fetchDimension(EMPTY_DIMENSION)
    : fetchDimension(newLocation);
  };
  
  
  const fetchDimension = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;
    
    axios
    .get(URL)
    .then(({ data }) => {
      setCurrentLocation(data);
      loaderScreen();
    })
    .catch((err) => {
      console.log(err);
      error404();
    });
  };

  const staticDimension = () =>{
    fetchDimension(EMPTY_DIMENSION)
  }

useEffect(() => {
  staticDimension()
  setTimeout(() => {
    const randomdimension = getRandomDimension(126)
  fetchDimension(randomdimension)
  }, 2000);
}, [])

  return (
    <main className="bg-[url(/images/bg-rm.png)] min-h-screen bg-cover px-4 font-Nunito text-black grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative bg-bottom overflow-hidden">
      <section>
        <img
          className="w-[260px] pt-8 min-[500px]:w-[350px]"
          src="/images/logo-ram.png"
          alt=""
        />
      </section>

      {!isLoading && <FirstScreen />}
      <ModalEmptySearch
        handleCloseModal={handleCloseModal}
        errorModal={emptySearch}
        title={"¿Acaso estás ciego?"}
        body={"Elige una dimensión"}
        footer={"aquí no hay nada"}
        img={"/images/ram-modal-def.jpg"}
      />
      <ModalEmptySearch
        handleCloseModal={handleCloseModal}
        errorModal={error404Modal}
        title={"Alguien saboteó la pistola de portales"}
        body={"¿fuiste tú?"}
        footer={"ERROR 404 PAGE NOT FOUND"}
        img={"/images/ram-error-404.png"}
      />

      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList
        residents={currentLocation?.residents ?? []}
        currentLocation={currentLocation}
      />
      <div className="text-red-wine bg-lila rounded-full h-10 aspect-square flex justify-center items-center border-4 border-red-wine fixed bottom-4 right-4 cursor-pointer" onClick={btnGoToUp}>
        <i className='bx bx-chevron-up-circle text-3xl'></i>
      </div>
    </main>
  );
}

export default App;
