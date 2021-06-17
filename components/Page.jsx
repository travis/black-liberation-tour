import { Component } from 'react'
import Footer from '../components/Footer'
import { TourStopLogo } from '../components/tour'

export default class Page extends Component {
  render() {
    return (
      <div className="<Page> w-full h-full">
        <main className="flex flex-col lg:flex-row min-w-full min-h-full">
          <div className="flex flex-col lg:w-1/3 text-white bg-black">
            <TourStopLogo className="mb-0" />
            <div className={'h-192 lg:flex-grow ' + (this.props.classes?.left ?? '')}>{this.props.left}</div>
          </div>
          <div className="flex flex-col sm:flex-row lg:w-2/3 min-h-0">
            <div
              className={
                'flex flex-col sm:w-1/2 md:w-2/5 text-left px-24 p-24 sm:px-10 sm:p-24 bg-white overflow-y-auto text-6xl sm:text-4xl md:text-2xl lg:text-lg ' +
                (this.props.classes?.middle ?? '')
              }
            >
              {this.props.middle}
            </div>

            <div
              className={'p-10 sm:p-6 sm:w-1/2 md:w-3/5 bg-pink overflow-y-scroll ' + (this.props.classes?.right ?? '')}
            >
              {this.props.right}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}
