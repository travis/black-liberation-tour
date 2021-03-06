// @ts-check

/**
 * @param {{
 *   to: import("../lib/data").TourStop
 *   from: import("../lib/data").TourStop
 * }} props
 */
export default function DirectionsButton({ to, from }) {
  const query = from
    ? `engine=fossgis_osrm_foot&route=${from.lat}%2C${from.lng}%3B${to.lat}%2C${to.lng}`
    : `engine=fossgis_osrm_foot&route=%3B${to.lat}%2C${to.lng}#map=16/${to.lat}/${to.lng}`
  return (
    <a
      href={`https://www.openstreetmap.org/directions?${query}`}
      className="btn p-10 lg:p-3 block text-center w-2/3 md:w-1/2"
    >
      Get Directions
    </a>
  )
}
