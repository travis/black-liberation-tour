import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import { tourStop } from '../../lib/data'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">Surrounded By Freeways</h1>
        <div className="flex">
          <h3 className="text-2xl">34th and Martin Luther King, Jr. Way</h3>
          <DirectionsButton from={tourStop['annette-miller']} to={tourStop['freeways']} />
        </div>

        <Image className="float-right" src="/places/freeways.jpg" height={200} width={300} />

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
          <source src="/audio/freeways.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Link href="/places/delilah-beasley-house">
          <a className="btn py-1">Next Stop: Delilah Beasley House</a>
        </Link>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
