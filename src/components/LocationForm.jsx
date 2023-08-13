import LocationInfo from "./LocationInfo"

const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="w-[260px] bg-white rounded-full overflow-hidden pl-4 border-4 border-red-wine flex justify-between font-bold text-lg mt-8">
        <input className="w-2/3 outline-none" id="newLocation" min={1} max={126} placeholder="Type a location id..." type="number"/>
        <button className="bg-light-yellow p-2 px-8 rounded-full border-l-4 border-red-wine ">Search</button>
    </form>
  )
}
export default LocationForm