import Image from 'next/image'
import Link from 'next/link'
import { Component, createRef } from 'react'
import Footer from '../components/Footer'
import { Arrow } from '../components/icons'
import Map from '../components/Map'
import Page from '../components/Page'
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
      <Page
        left={<Map className="h-192 lg:h-full" zoom={15} center={center} markers={tourLocations} />}
        middle={
          <>
            <h3 className="font-serif text-8xl sm:text-6xl lg:text-4xl pl-3 mb-12 sm:mb-6 uppercase text-red">
              Stations:
            </h3>
            <Link href="/places/st-augustines">
              <a className="station-name text-red-dark">
                <span className="">
                  St. Augustine's
                  <br />
                  Episcopal Church <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/annette-miller">
              <a className="station-name text-red-dark">
                <span className="">
                  Annette Miller <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/freeways">
              <a className="station-name text-red-dark">
                <span className="">
                  Surrounded By Freeways <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/delilah-beasley-house">
              <a className="station-name text-red-dark">
                <span className="">
                  Delilah Beasley House <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/cl-dellums">
              <a className="station-name text-red-dark">
                <span className="">
                  C.L. Dellums <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/ymca">
              <a className="station-name text-red-dark">
                <span className="">
                  Northwest Branch YMCA <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/north-oakland-library">
              <a className="station-name text-red-dark">
                <span className="">
                  North Oakland
                  <br />
                  Branch Library <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/flints">
              <a className="station-name text-red-dark">
                <span className="">
                  Flint’s BBQ <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
            <Link href="/places/california-hotel">
              <a className="station-name text-red-dark">
                <span className="">
                  California Hotel <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
                </span>
              </a>
            </Link>
          </>
        }
        right={
          <>
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
                  <Image src="/places/california-hotel.jpg" height={222} width={300} />
                </a>
              </Link>
            </div>
          </>
        }
      />
    )
  }
}
