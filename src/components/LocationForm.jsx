import LocationInfo from "./LocationInfo"

const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="w-[260px] bg-white rounded-full overflow-hidden pl-4 border-4 border-red-wine flex justify-between font-bold mt-8 min-[500px]:w-[350px]">
        <input className="w-2/3 outline-none text-sm font-light min-[500px]:text-base min-[500px]:font-bold" id="newLocation" min={1} max={126} placeholder="Type a location id..." type="number"/>
        <button className="bg-light-yellow p-2 px-6 text-red-wine text-lg rounded-full border-l-4 border-red-wine ">Search</button>
    </form>
  )
}
export default LocationForm