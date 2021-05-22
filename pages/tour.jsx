import Image from 'next/image'
import Link from 'next/link'
import Map from '../components/Map'

import { center, tourLocations } from "../lib/data"


export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-6xl text-center p-6">Black Liberation Walking Tour</h1>
        <Map className="h-96" zoom={15} center={center} markers={tourLocations}/>
        <div className="mt-12 flex flex-row">
        <Link href="/places/st-augustines">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  St. Augustine's Episcopal Church
                </h2>
                <Image src="/places/st-augustines.jpg" height={222} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/annette-miller">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Annette Miller
                </h2>
                <Image src="/places/annette-miller.jpg" height={200} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/freeways">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Surrounded By Freeways
                </h2>
                <Image src="/places/freeways.jpg" height={222} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/delilah-beasley-house">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Delilah Beasley House
                </h2>
                <Image src="/places/delilah-beasley-house.jpg" height={380} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/cl-dellums">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  C.L. Dellums
                </h2>
                <Image src="/places/cl-dellums.jpg" height={222} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/ymca">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Northwest Branch YMCA
                </h2>
                <Image src="/places/ymca.jpg" height={241} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/north-oakland-library">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  North Oakland Branch Library
                </h2>
                <Image src="/places/north-oakland-library.jpg" height={222} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/flints">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Flint’s BBQ
                </h2>
                <Image src="/places/flints.jpg" height={222} width={300} />
              </div>
            </a>
          </Link>
        </div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
