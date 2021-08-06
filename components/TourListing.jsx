// @ts-check
import Image from 'next/image'
import Link from 'next/link'
import { Component, createRef } from 'react'
import ReactTooltip from 'react-tooltip'
import { Arrow } from './icons'
import Map from './Map'
import ThreeColumnPage from './Page'

function LinkArrow() {
  return <Arrow className="arrow w-48 sm:w-28 lg:w-16 inline" />
}

/**
 * @type {new () => Component<{
 *   stops: Array<import('../lib/data').TourStop>
 *   center: [number, number]
 *   title: import('react').ReactElement
 * }, {}>}
 */
// @ts-ignore
const Comp = Component

export default class TourListing extends Comp {
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
      <ThreeColumnPage
        title={this.props.title}
        left={<Map className="h-192 lg:h-full" zoom={15} center={this.props.center} markers={this.props.stops} />}
        middle={
          <>
            <h3 className="font-serif text-8xl sm:text-6xl lg:text-4xl pl-3 mb-12 sm:mb-6 uppercase text-red">
              Tour Stops:
            </h3>
            {this.props.stops.map(stop => (
              <Link href={stop.slug}>
                <a className="station-name text-red-dark">
                  {stop.htmlName != null ? (
                    <span dangerouslySetInnerHTML={{ __html: stop.htmlName }}></span>
                  ) : (
                    <span>{stop.name}</span>
                  )}
                  <LinkArrow />
                </a>
              </Link>
            ))}
          </>
        }
        right={
          <>
            <div ref={this.mosaic} className="clearfix tour-images w-full h-auto">
              {this.props.stops.map(spot => (
                <Link href={spot.slug}>
                  <a className="mosaicflow__item block w-full m-0" data-tip={spot.name}>
                    <Image src={spot.img} height={222} width={300} />
                  </a>
                </Link>
              ))}
            </div>
            <ReactTooltip type={'info'} place={'bottom'} backgroundColor="rgb(158, 62, 35)" />
          </>
        }
      />
    )
  }
}
