// @ts-check
import { Component } from 'react'
import TourListing from '../components/TourListing'
import { muralStops, thirtiethAndWest } from '../lib/data'

export default class Murals extends Component {
  render() {
    return (
      <TourListing
        stops={muralStops}
        center={thirtiethAndWest}
        title={
          <>
            Black Liberation <br /> Mural Tour
          </>
        }
      />
    )
  }
}
