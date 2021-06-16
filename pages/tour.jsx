import Image from 'next/image'
import Link from 'next/link'
import { Component, createRef } from 'react'
import Footer from '../components/Footer'
import { Arrow } from '../components/icons'
import Map from '../components/Map'
import { TourStopLogo } from '../components/tour'

import { center, tourLocations } from '../lib/data'

export default class Tour extends Component {
  mosaic = createRef()

  componentDidMount() {
    $(this.mosaic.current).mosaicflow({
      itemHeightCalculation: 'attribute',
      minItemWidth: 10000000,
    })
  }

  componentWillUnmount() {
    $(this.mosaic.current).mosaicflow('empty')
  }

  render() {
    return (
      <div className="w-full h-full">
        <main className="flex flex-col lg:flex-row min-w-full min-h-full">
          <div className="flex flex-col lg:w-1/3 text-white bg-black">
            <TourStopLogo className="mb-0" />
            <Map className="h-192 lg:flex-grow" zoom={15} center={center} markers={tourLocations} />
          </div>
          <div className="flex flex-col sm:flex-row lg:w-2/3 min-h-0">
            {/* ///////////////////////////////////////////////////////////////////// */}
            {/* LINKS /////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////// */}
            <div className="flex flex-col sm:w-2/5 text-left px-6 pt-24 bg-yellow-600 overflow-y-auto text-6xl md:text-3xl lg:text-lg">
              <h3 className="font-serif text-8xl sm:text-4xl pl-3 mb-6 uppercase text-red">Stations:</h3>
              <Link href="/places/st-augustines">
                <a className="station-name text-red-dark">
                  <span className="">
                    St. Augustine's
                    <br />
                    Episcopal Church <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/annette-miller">
                <a className="station-name text-red-dark">
                  <span className="">
                    Annette Miller <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/freeways">
                <a className="station-name text-red-dark">
                  <span className="">
                    Surrounded By Freeways <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/delilah-beasley-house">
                <a className="station-name text-red-dark">
                  <span className="">
                    Delilah Beasley House <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/cl-dellums">
                <a className="station-name text-red-dark">
                  <span className="">
                    C.L. Dellums <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/ymca">
                <a className="station-name text-red-dark">
                  <span className="">
                    Northwest Branch YMCA <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/north-oakland-library">
                <a className="station-name text-red-dark">
                  <span className="">
                    North Oakland
                    <br />
                    Branch Library <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/flints">
                <a className="station-name text-red-dark">
                  <span className="">
                    Flint’s BBQ <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
              <Link href="/places/california-hotel">
                <a className="station-name text-red-dark">
                  <span className="">
                    California Hotel <Arrow className="arrow w-16 inline" />
                  </span>
                </a>
              </Link>
            </div>

            {/* ////////////////////////////////////////////////////////////////////// */}
            {/* IMAGES /////////////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////////////////////// */}
            <div className="p-10 sm:p-6 sm:w-3/5 bg-pink overflow-y-scroll">
              <div ref={this.mosaic} className="clearfix tour-images w-full h-auto">
                <Link href="/places/north-oakland-library">
                  <a className="mosaicflow__item block w-full m-0" height="222">
                    <Image src="/places/north-oakland-library.jpg" height={222} width={300} />
                  </a>
                </Link>
                <Link href="/places/st-augustines">
                  <a className="mosaicflow__item block w-full m-0" height="342">
                    <Image src="/places/st-augustines.jpg" height={342} width={300} />
                  </a>
                </Link>
                <Link href="/places/annette-miller">
                  <a className="mosaicflow__item block w-full m-0" height="200">
                    <Image src="/places/annette-miller.jpg" height={200} width={300} />
                  </a>
                </Link>
                <Link href="/places/flints">
                  <a className="mosaicflow__item block w-full m-0" height="222">
                    <Image src="/places/flints.jpg" height={222} width={300} />
                  </a>
                </Link>
                <Link href="/places/freeways">
                  <a className="mosaicflow__item block w-full m-0" height="150">
                    <Image src="/places/freeways.jpg" height={150} width={300} />
                  </a>
                </Link>
                <Link href="/places/cl-dellums">
                  <a className="mosaicflow__item block w-full m-0" height="220">
                    <Image src="/places/cl-dellums.jpg" height={220} width={300} />
                  </a>
                </Link>
                <Link href="/places/delilah-beasley-house">
                  <a className="mosaicflow__item block w-full m-0" height="380">
                    <Image src="/places/delilah-beasley-house.jpg" height={380} width={300} />
                  </a>
                </Link>
                <Link href="/places/ymca">
                  <a className="mosaicflow__item block w-full m-0" height="241">
                    <Image src="/places/ymca.jpg" height={241} width={300} />
                  </a>
                </Link>
                <Link href="/places/california-hotel">
                  <a className="mosaicflow__item block w-full m-0" height="222">
                    <Image src="/places/california-hotel.png" height={222} width={300} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}
