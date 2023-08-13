const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {pages.map((page) => (
        <li
          className={`cursor-pointer h-12 aspect-square bg-light-yellow border-4 border-red-wine rounded-full flex justify-center items-center text-red-wine text-xl font-bold hover:scale-110 transition-transform ${currentPage === page && "bg-lila text-red-wine border-4 border-red-wine scale-110 transition-all"}`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
