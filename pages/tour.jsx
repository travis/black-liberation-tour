import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { Arrow } from "../components/icons";
import Map from "../components/Map";
import { TourStopLogo } from "../components/tour";

import { center, tourLocations } from "../lib/data";

export default function Tour() {
  return (
    <div className="w-full h-full">
      <main className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex flex-col lg:w-1/3 text-white bg-black">
          <TourStopLogo className="mb-0" />
          <Map className="h-96 flex-grow" zoom={15} center={center} markers={tourLocations} />
        </div>
        <div className="flex flex-col sm:flex-row lg:w-2/3">
          <div className="flex flex-col sm:w-1/2 text-left px-6 pt-24 bg-yellow-600 overflow-y-auto">
            <h3 className="font-serif text-3xl pl-3 mb-6 uppercase">Stations:</h3>
            <Link href="/places/st-augustines">
              <a className="station-name">
                <h2 className="">
                  St. Augustine's
                  <br />
                  Episcopal Church <Arrow className="arrow w-20 inline" />
                </h2>
              </a>
            </Link>
            <Link href="/places/annette-miller">
              <a className="station-name">
                <h2 className="">Annette Miller <Arrow className="arrow w-20 inline" /></h2>
              </a>
            </Link>
            <Link href="/places/freeways">
              <a className="station-name">
                <h2 className="">Surrounded By Freeways <Arrow className="arrow w-20 inline" /></h2>
              </a>
            </Link>
            <Link href="/places/delilah-beasley-house">
              <a className="station-name">
                <h2 className="">Delilah Beasley House <Arrow className="arrow w-20 inline" /></h2>
              </a>
            </Link>
            <Link href="/places/cl-dellums">
              <a className="station-name">
                <h2 className="">C.L. Dellums <Arrow className="arrow w-20 inline" /></h2>
              </a>
            </Link>
            <Link href="/places/ymca">
              <a className="station-name">
                <h2 className="">Northwest Branch YMCA <Arrow className="arrow w-20 inline" /></h2>
              </a>
            </Link>
            <Link href="/places/north-oakland-library">
              <a className="station-name">
                <h2 className="">
                  North Oakland
                  <br />
                  Branch Library <Arrow className="arrow w-20 inline" />
                </h2>
              </a>
            </Link>
            <Link href="/places/flints">
              <a className="station-name">
                <h2 className="">Flint’s BBQ <Arrow className="arrow w-20 inline" /></h2>
              </a>
            </Link>
            <Link href="/places/california-hotel">
              <a className="station-name">
                <h2 className="">California Hotel <Arrow className="arrow w-20 inline" /></h2>
              </a>
            </Link>
          </div>
          <div className="p-6 sm:w-1/2 grid grid-rows-5 grid-cols-12 gap-2 bg-pink overflow-hidden">
            <Link href="/places/north-oakland-library">
              <a className="col-start-1 col-span-5">
                <Image src="/places/north-oakland-library.jpg" height={222} width={300} />
              </a>
            </Link>
            <Link href="/places/st-augustines">
              <a className="col-start-9 col-span-4">
                <Image src="/places/st-augustines.jpg" height={342} width={300} />
              </a>
            </Link>
            <Link href="/places/annette-miller">
              <a className="col-start-3 col-span-6">
                <Image src="/places/annette-miller.jpg" height={200} width={300} />
              </a>
            </Link>
            <Link href="/places/flints">
              <a className="col-start-0 col-span-6">
                <Image src="/places/flints.jpg" height={222} width={300} />
              </a>
            </Link>
            <Link href="/places/freeways">
              <a className="col-start-7 col-span-6 ">
                <Image src="/places/freeways.jpg" height={150} width={300} />
              </a>
            </Link>
            <Link href="/places/cl-dellums">
              <a className="col-start-2 col-span-6">
                <Image src="/places/cl-dellums.jpg" height={220} width={300} />
              </a>
            </Link>
            <Link href="/places/delilah-beasley-house">
              <a className="col-start-9 col-span-4 transform translate-y-20">
                <Image src="/places/delilah-beasley-house.jpg" height={380} width={300} />
              </a>
            </Link>

            <Link href="/places/ymca">
              <a className="col-start-3 col-span-6">
                <Image src="/places/ymca.jpg" height={241} width={300} />
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

      <Footer />
    </div>
  );
}
