import axios from "axios";
import { useEffect, useState } from "react";

const CardResidents = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const statusObj = {
    Alive: "bg-green-apple",
    Dead: "bg-red",
    unknown: "bg-gray-blue"
  };

  useEffect(() => {
    axios
      .get(residentURL)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  });

  return (
    <article className="bg-purple w-[260px] h-80 grid grid-rows-[auto_auto] place-items-center">
      <header className="text-center relative">
        <img
          className="h-[150px] aspect-square border-solid border-[8px] border-red-wine rounded-full"
          src={residentInfo?.image}
          alt=""
        />
        <div className="bg-dark-gray flex gap-2 justify-center items-center text-white w-[90px] p-[2px] rounded-full absolute bottom-6 right-1/2 translate-x-1/2 text-sm">
          <div
            className={`h-3 aspect-square ${statusObj[residentInfo?.status]} rounded-full`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section>
        <h3>{residentInfo?.name}</h3>
        <ul>
          <li>Species: {residentInfo?.species}</li>
          <li>Origin: {residentInfo?.origin.name}</li>
          <li>Times appear: {residentInfo?.episode.length}</li>
        </ul>
      </section>
    </article>
  );
};
export default CardResidents;
