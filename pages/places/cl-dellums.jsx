import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import { tourStop } from '../../lib/data'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">C.L. Dellums</h1>
        <div className="flex">
          <h3 className="text-2xl">829 Brockhurst</h3>
          <DirectionsButton from={tourStop['delilah-beasley-house']} to={tourStop['cl-dellums']} />
        </div>

        <Image className="float-right" src="/places/cl-dellums.jpg" height={200} width={300} />

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
          <source src="/audio/ymca.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Link href="/places/ymca">
          <a className="btn py-1">Next Stop: Northwest Branch YMCA</a>
        </Link>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
