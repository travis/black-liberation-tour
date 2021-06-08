import DirectionsButton from './DirectionsButton'
import ContactDonateSection from './ContactSection'
import SubscribeFollowSection from './SubscribeFollowSection'

import Link from 'next/link'

export function TourStopHeader({ name, location, from, to }) {
  return (
    <>
      <h1 className="text-5xl text-red mt-24 font-display">
        <Link href="/">
          <a className="no-underline">
          {name}
          </a>
        </Link>
      </h1>
      <h3 className="text-lg mb-4 italic">{location}</h3>
      <DirectionsButton from={from} to={to} />
    </>
  )
}

export function TourStopFooter({ }) {
  return (
    <footer className="grid grid-cols-3 bg-red-dark text-pink">
      <div className="relative">
        <span className="absolute left-6 bottom-6 uppercase">
          Black Liberation Walking Tour
        </span>
      </div>
      <div className="py-12 px-6">
        <ContactDonateSection />
      </div>
      <div className="py-12 px-6">
        <SubscribeFollowSection />
      </div>
    </footer>
  )
}

export function TourStopLogo({ className, ...props }) {
  return (
    <div className={`uppercase font-bold bg-red text-center p-12 text-red-light text-xl mb-6 ${className}`} {...props}>
      <Link href="/tour">
        <a className="no-underline">
        Black Liberation<br /> Walking Tour
        </a>
      </Link>
    </div>
  )
}

export function TourStop({ children }) {
  return (
    <>
      <main className="grid grid-cols-12">
        {children}
      </main>
      <TourStopFooter />
    </>
  )
}

export function TourAudio({ src, ...props }) {
  return (
    <audio controls {...props}>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export function TourStopIntro({ className, ...props }) {
  return (
    <section className={`text-center bg-yellow col-span-4 ${className}`} {...props} />
  )
}

export function TourStopContent({ className, ...props }) {
  return (
    <section className={`mx-12 col-span-5 ${className}`} {...props} />
  )
}

export function TourStopMedia({ className, ...props }) {
  return (
    <section className={`flex flex-col justify-between col-span-3 ${className}`} {...props} />
  )
}