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

        <Image className="float-right" src="/places/california-hotel.png" height={200} width={300} />

        <p className="my-3">
          The California Hotel opened in 1930 as a whites-only hotel. It became one of the few hotels in Oakland where Blacks were allowed to perform in 1949, and finally allowed Black guests to stay there in 1953. For many years it was a notable venue for blues and jazz performers, before closing in 1971.        </p>

        <p className="my-3">
          Join the Friends of Hoover Durant Public Library to celebrate the launch of this walking tour, and come share your story about the neighborhood! There will be food, music, and more!
        </p>

        <p className="my-3">
          <dl>
            <dt className="font-bold">When</dt>
            <dd>June 19th, 11am – 4pm</dd>
            <dt className="font-bold">Where</dt>
            <dd>SPARC-it-Place near the California Hotel</dd>
            <dt className="font-bold">Who</dt>
            <dd>Friends of Hoover Durant Public Library</dd>
          </dl>
        </p>
        {/*
        <audio controls className="my-12">
          <source src="/audio/california_hotel.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        */}
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
