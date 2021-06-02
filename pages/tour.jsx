import Image from 'next/image'
import Link from 'next/link'
import Map from '../components/Map'

import { center, tourLocations } from "../lib/data"


export default function Tour() {
  return (
    <div className="">
      <main className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/3 text-white bg-black">
          <h1 className="text-4xl text-center p-6">Black Liberation Walking Tour</h1>
          <Map className="h-96 flex-grow" zoom={15} center={center} markers={tourLocations} />
        </div>
        <div className="flex flex-col sm:flex-row lg:w-2/3">
          <div className="flex flex-col sm:w-1/2 text-left px-6 pt-24 bg-yellow-600">
            <h3 className="font-serif text-3xl pl-3 mb-6">Stations:</h3>
            <Link href="/places/st-augustines">
              <a className="station-name">
                <h2 className="">
                  St. Augustine's<br />
                 Episcopal Church
                </h2>
              </a>
            </Link>
            <Link href="/places/annette-miller">
              <a className="station-name">
                <h2 className="">
                  Annette Miller
                </h2>
              </a>
            </Link>
            <Link href="/places/freeways">
              <a className="station-name">
                <h2 className="">
                  Surrounded By Freeways
              </h2>
              </a>
            </Link>
            <Link href="/places/delilah-beasley-house">
              <a className="station-name">
                <h2 className="">
                  Delilah Beasley House
              </h2>
              </a>
            </Link>
            <Link href="/places/cl-dellums">
              <a className="station-name">
                <h2 className="">
                  C.L. Dellums
                </h2>
              </a>
            </Link>
            <Link href="/places/ymca">
              <a className="station-name">
                <h2 className="">
                  Northwest Branch YMCA
                </h2>
              </a>
            </Link>
            <Link href="/places/north-oakland-library">
              <a className="station-name">
                <h2 className="">
                  North Oakland<br />
                Branch Library
                </h2>
              </a>
            </Link>
            <Link href="/places/flints">
              <a className="station-name">
                <h2 className="">
                  Flint’s BBQ
                </h2>
              </a>
            </Link>
            <Link href="/places/california-hotel">
              <a className="station-name">
                <h2 className="">
                  California Hotel
                </h2>
              </a>
            </Link>
          </div>
          <div className="px-6 sm:w-1/2 grid grid-rows-5 grid-cols-12 gap-2 bg-yellow-600">
            <Link href="/places/st-augustines">
              <a className="col-start-9 col-span-4">
                <Image src="/places/st-augustines.jpg" height={222} width={300} />
              </a>
            </Link>
            <Link href="/places/annette-miller">
              <a className="col-start-3 col-span-8">
                <Image src="/places/annette-miller.jpg" height={200} width={300} />
              </a>
            </Link>
            <Link href="/places/flints">
              <a className="col-start-0 col-span-6">
                <Image src="/places/flints.jpg" height={222} width={300} />
              </a>
            </Link>
            <Link href="/places/freeways">
              <a>
                <Image src="/places/freeways.jpg" height={222} width={300} />
              </a>
            </Link>
            <Link href="/places/delilah-beasley-house">
              <a className="col-start-9 col-span-4 transform translate-y-20">
                <Image src="/places/delilah-beasley-house.jpg" height={380} width={300} />
              </a>
            </Link>
            <Link href="/places/cl-dellums">
              <a className="">
                <Image src="/places/cl-dellums.jpg" height={222} width={300} />
              </a>
            </Link>
            <Link href="/places/ymca">
              <a className="col-start-3 col-span-6">
                <Image src="/places/ymca.jpg" height={241} width={300} />
              </a>
            </Link>
            <Link href="/places/north-oakland-library">
              <a>
                <Image src="/places/north-oakland-library.jpg" height={222} width={300} />
              </a>
            </Link>
            <Link href="/places/california-hotel">
              <a>
                <Image src="/places/california-hotel.jpg" height={222} width={300} />
              </a>
            </Link>
          </div>

        </div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
