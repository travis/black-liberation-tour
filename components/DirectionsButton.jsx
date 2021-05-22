export default function DirectionsButton({to, from}){
  const query = from ? (
    `engine=fossgis_osrm_foot&route=${from.lat}%2C${from.lng}%3B${to.lat}%2C${to.lng}`
  ) : (
    `to=${to.lat}%2C${to.lng}`
  )
    return (
      <a href={`https://www.openstreetmap.org/directions?${query}`} className="btn">
        Get Directions
      </a>
    )
}