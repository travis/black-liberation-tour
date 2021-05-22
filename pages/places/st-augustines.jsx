import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { tourStop } from "../../lib/data"
import DirectionsButton from "../../components/DirectionsButton"


export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">St Augustine's Episcopal Church</h1>
        <div className="flex">
          <h3 className="text-2xl">525 29th Street</h3>
          <DirectionsButton to={tourStop["st-augustines"]} />
        </div>

        <Image className="float-right" src="/places/st-augustines.jpg" height={200} width={300} />

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
          <source src="/audio/st-augustines.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Link href="/places/annette-miller">
          <a className="btn py-1">Next Stop: Annette Miller</a>
        </Link>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
