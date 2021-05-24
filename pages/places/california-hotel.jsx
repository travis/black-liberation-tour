import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import { tourStop } from '../../lib/data'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">California Hotel</h1>
        <div className="flex">
          <h3 className="text-2xl">35th and San Pablo</h3>
          <DirectionsButton from={tourStop['flints']} to={tourStop['california-hotel']} />
        </div>

        <Image className="float-right" src="/places/california-hotel.jpg" height={200} width={300} />

        <p className="my-3">
          Lorem
        </p>

        <p className="my-3">
          Ipsum
        </p>

        <p className="my-3">
          Lorem
        </p>

        <p className="my-3">
          Ipsum
        </p>
        <audio controls className="my-12">
          <source src="/audio/california_hotel.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
