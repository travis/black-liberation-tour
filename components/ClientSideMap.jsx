// @ts-check
import Link from 'next/link'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

/**
 * @param {{
 *   markers?: Array<import('../lib/data').TourStop>
 *   className: string
 *   zoom: number
 *   center: [number, number]
 * }} options
 */
export default function Map({ markers, ...props }) {
  return (
    <MapContainer scrollWheelZoom={false} {...props}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {markers &&
        markers.map(({ lat, lng, name, address, slug }) => (
          <Marker position={[lat, lng]} key={slug}>
            <Popup>
              <Link href={slug}>
                <a>
                  {name} - {address}
                </a>
              </Link>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}
