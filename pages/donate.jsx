import { Component } from 'react'
import ThreeColumnPage from '../components/Page'

export default class Donate extends Component {
  render() {
    return (
      <ThreeColumnPage
        left={<img src="/places/CA-hotel.jpg" className="object-cover w-full h-full block" />}
        middle={'middle'}
        right={'right'}
        classes={{
          middle: 'bg-pink',
        }}
      />
    )
    // return (
    //   <div className="<Donate> w-full h-full">
    //     <main className="flex flex-col lg:flex-row min-w-full min-h-full">
    //       <div className="flex flex-col lg:w-1/3 text-white bg-black">
    //         <TourStopLogo className="mb-0" />
    //         <div className="h-192 lg:flex-grow">
    //           <img src="/places/CA-hotel.jpg" className="object-cover w-full h-full block" />
    //         </div>
    //       </div>
    //       <div className="flex flex-col sm:flex-row lg:w-2/3 min-h-0">
    //         {/* ///////////////////////////////////////////////////////////////////// */}
    //         {/*  DONATE INFO //////////////////////////////////////////////////////// */}
    //         {/* ///////////////////////////////////////////////////////////////////// */}
    //         <div className="flex flex-col sm:w-1/2 md:w-2/5 text-left px-24 p-24 sm:px-10 sm:p-24 bg-pink overflow-y-auto text-6xl sm:text-4xl md:text-2xl lg:text-lg"></div>

    //         {/* ////////////////////////////////////////////////////////////////////// */}
    //         {/* SPONSORS ///////////////////////////////////////////////////////////// */}
    //         {/* ////////////////////////////////////////////////////////////////////// */}
    //         <div className="p-10 sm:p-6 sm:w-1/2 md:w-3/5 bg-pink overflow-y-scroll"></div>
    //       </div>
    //     </main>

    //     <Footer />
    //   </div>
    // )
  }
}
