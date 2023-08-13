import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import ModalEmptySearch from "./components/ModalEmptySearch";

function App() {
const [currentLocation, setCurrentLocation] = useState(null)
const [emptySearch, setEmptySearch] = useState(false)

const handleSubmit = (e) => {
e.preventDefault()
const newLocation = e.target.newLocation.value
newLocation === "" ? setEmptySearch(true) : fetchDimension(newLocation)

}

const handleCloseModal = () => {
  setEmptySearch(false)
}

const fetchDimension = (idLocation) => {
  const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;
    axios
      .get(URL)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
}
  useEffect(() => {
    const randomDimension = getRandomDimension(126)
    fetchDimension(randomDimension)
  }, []);

  return (
    <main className="bg-[url(/images/bg-rm.jpg)] min-h-screen bg-cover p-4 font-Nunito text-black grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative">
      <section>
        <img className="w-[260px] pt-8 min-[500px]:w-[350px]" src="/images/logo-ram.png" alt="" />
      </section>
      {emptySearch && <ModalEmptySearch handleCloseModal={handleCloseModal}/>}
      <LocationForm handleSubmit={handleSubmit}/>
      <LocationInfo currentLocation={currentLocation}/>
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
    </main>
  );
}

export default App;
