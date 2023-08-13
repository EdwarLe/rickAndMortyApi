import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
const [currentLocation, setCurrentLocation] = useState(null)

const handleSubmit = (e) => {
e.preventDefault()
const newLocation = e.target.newLocation.value

fetchDimension(newLocation)
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
    <main className="bg-[url(/images/bg-rm.jpg)] min-h-screen bg-cover p-4 font-Nunito text-black">
      <section>
        <img className="w-[300px] pt-8" src="/images/logo-ram.png" alt="" />
      </section>
      <LocationForm handleSubmit={handleSubmit}/>
      <LocationInfo currentLocation={currentLocation}/>
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
    </main>
  );
}

export default App;