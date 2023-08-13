import { useEffect, useState } from "react";
import CardResidents from "./CardResidents";
import Pagination from "./Pagination";

const INITIAL_PAGE = 1

const ResidentList = ({ residents, currentLocation }) => {
const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)

const RESIDENTS_PER_PAGE = 12
const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)
const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
const residentsInPage = residents.slice(sliceStart, sliceEnd)

const pages = []

for(let i = 1; i <= totalPages; i++) {
    pages.push(i)
}

useEffect(() => {
setCurrentPage(INITIAL_PAGE)
}, [currentLocation])

  return (
    <section>
        <section>
      {residentsInPage.map((resident) => (
          <CardResidents key={resident} residentURL={resident} />
          ))}

        </section>
        <section>
<Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </section>
    </section>
  );
};
export default ResidentList;