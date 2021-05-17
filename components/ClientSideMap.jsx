

import Link from 'next/link'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const center = [37.820064, -122.273499]

export default function Map({ markers, ...props }) {

  return (
    <MapContainer scrollWheelZoom={false} {...props}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {markers && markers.map(([lat, long, title, addressTitle, slug]) => (
        <Marker position={[lat, long]}>
          <Popup>
            <Link href={`/places/${slug}`}>
              <a>
                {title} - {addressTitle}
              </a>
            </Link>
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  )
}

