// @ts-check
import { Component } from 'react'
import TourListing from '../components/TourListing'
import { thirtiethAndWest, tourLocations } from '../lib/data'

export default class Tour extends Component {
  render() {
    return (
      <TourListing
        stops={tourLocations}
        center={thirtiethAndWest}
        title={
          <>
            Black Liberation <br /> Walking Tour
          </>
        }
      />
    )
  }
}
