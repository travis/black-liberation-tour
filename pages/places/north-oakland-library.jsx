import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">North Oakland Branch Library</h1>
        <h3 className="text-2xl">30th and San Pablo</h3>

        <Image className="float-right" src="/places/north-oakland-library.jpg" height={200} width={300} />

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
          <source src="/audio/north-oakland-library.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Link href="/places/flints">
          <a className="btn py-1">Next Stop: Flint's BBQ</a>
        </Link>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
