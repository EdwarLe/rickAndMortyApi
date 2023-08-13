import axios from "axios";
import { useEffect, useState } from "react";
import "./CardResidents.css";
import ListInfoResidents from "./ListInfoResidents";

const CardResidents = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const statusObj = {
    Alive: "bg-green-apple",
    Dead: "bg-red",
    unknown: "bg-gray-blue",
  };

  useEffect(() => {
    axios
      .get(residentURL)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  });

  return (
    <article className="w-[260px] h-80 grid grid-rows-[auto_auto] place-items-center">
      <header className="text-center relative z-10">
        <img
          className="h-[150px] aspect-square border-solid border-[8px] border-red-wine rounded-full"
          src={residentInfo?.image}
          alt=""
        />
        <div className="bg-dark-gray/70 flex gap-2 justify-center items-center text-white w-[90px] p-[2px] rounded-full absolute bottom-6 right-1/2 translate-x-1/2 text-sm">
          <div
            className={`h-3 aspect-square ${
              statusObj[residentInfo?.status]
            } rounded-full animate-pulse`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section className="bg-purple h-[200px] border-8 border-red-wine rounded-3xl w-full p-6 relative -mt-14 transition-all duration-700 bodyCard hover:h-[250px]">
        <div className="bg-lila absolute h-full w-[95%] left-0 top-0 rounded-special"></div>
        <div className="absolute w-full left-0 top-0">
          <h3 className="bg-light-yellow text-2xl text-center font-bold text-red-wine pb-4 pt-8 rounded-[15px] w-full line-clamp-1 scaleCard hover:line-clamp-2 transition-all duration-700">{residentInfo?.name}</h3>
          <ul className=" text-red-wine text-sm p-4 grid grid-rows-3 gap-2">
            <ListInfoResidents residentInfo={residentInfo?.species} residentProperties={"SPECIES: "}/>
            <ListInfoResidents residentInfo={residentInfo?.origin.name} residentProperties={"ORIGIN: "}/>
            <ListInfoResidents residentInfo={residentInfo?.episode.length} residentProperties={"TIMES APPEAR: "}/>
          </ul>
        </div>
      </section>
    </article>
  );
};
export default CardResidents;
