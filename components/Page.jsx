// @ts-check
import { Component } from 'react'
import Footer from '../components/Footer'
import { TourStopLogo } from '../components/tour'

/**
 * @type {new () => Component<{
 *   left: import('react').ReactElement
 *   middle: import('react').ReactElement
 *   right: import('react').ReactElement
 *   classes?: Partial<Record<'left' | 'middle' | 'right', string>>
 *   title: import('react').ReactElement
 * }, {}>}
 */
// @ts-ignore
const Comp = Component

/**
 * A common 3-column layout shared between the /tour, /murals, and /donate pages.
 *
 * The following props are accepted:
 *  - left: content for the left column
 *  - middle: content for the middle column
 *  - right: content for the right column
 *  - classes: an optional object with optional left, middle, and right
 *  properties each containing a class name string to pass to the className of the
 *  three respective content containers.
 *  - title: The page title at the top left.
 */
export default class ThreeColumnPage extends Comp {
  render() {
    return (
      <div className="<Page> w-full h-full">
        <main className="flex flex-col lg:flex-row min-w-full min-h-full">
          <div className="flex flex-col lg:w-1/3 text-white bg-black">
            <TourStopLogo className="mb-0" title={this.props.title} />
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
