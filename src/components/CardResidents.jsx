import axios from "axios";
import { useEffect, useState } from "react";

const CardResidents = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null);

const statusObj = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
}

  useEffect(() => {
    axios
      .get(residentURL)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  });

  return (
    <article>
      <header>
        <img src={residentInfo?.image} alt="" />
        <div>
            <div className={`h-3 aspect-square ${statusObj[residentInfo?.status]} rounded-full`}></div>
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
