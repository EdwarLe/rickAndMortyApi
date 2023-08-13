const LocationInfo = ({currentLocation}) => {
  return (
    <section className="flex flex-col justify-center items-center bg-red-wine mt-4 p-4 rounded-3xl text-white shadow-md gap-2 w-[260px] min-[500px]:w-full min-[500px]:max-w-[1024px]">
        <h2 className="text-xl font-bold text-center">{currentLocation?.name}</h2>
        <ul className="grid grid-rows-3 place-items-center text-center gap-1 sm:grid-rows-none sm:grid-cols-3 sm:gap-12">
            <li>Type: {currentLocation?.type}</li>
            <li>Dimension: {currentLocation?.dimension}</li>
            <li>Population: {currentLocation?.residents.length}</li>
        </ul>

    </section>
  )
}
export default LocationInfo