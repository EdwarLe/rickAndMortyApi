const ListInfoResidents = ({residentInfo, residentProperties}) => {
  return (
    <li className=" grid grid-cols-2">{residentProperties}<span className="text-white line-clamp-1">{residentInfo}</span></li>
  )
}
export default ListInfoResidents