import LocationInfo from "./LocationInfo"

const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-full overflow-hidden pl-4 border-4 border-red-wine flex justify-between">
        <input className="w-2/3" id="newLocation" min={1} max={126} placeholder="Type a location id..." type="number"/>
        <button className="bg-light-yellow p-2 px-4 rounded-full">Search</button>
    </form>
  )
}
export default LocationForm