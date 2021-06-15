import Link from 'next/link'
import DirectionsButton from './DirectionsButton'
import Footer from './Footer'

export function TourStopHeader({ name, location, from, to }) {
  return (
    <>
      <h1 className="text-5xl text-red mt-24 font-display">
        <Link href="/">
          <a className="no-underline">{name}</a>
        </Link>
      </h1>
      <h3 className="text-lg mb-4 italic">{location}</h3>
      <DirectionsButton from={from} to={to} />
    </>
  )
}

export function TourStopLogo({ className, ...props }) {
  return (
    <div
      className={`uppercase font-bold bg-red text-center p-12 text-red-light text-8xl md:text-5xl lg:text-3xl ${className}`}
      {...props}
    >
      <Link href="/tour">
        <a className="no-underline">
          Black Liberation
          <br /> Walking Tour
        </a>
      </Link>
    </div>
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

export function TourStop({ children }) {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-12">{children}</main>
      <Footer />
    </>
  )
}

export function TourStopIntro({ className, ...props }) {
  return <section className={`text-center bg-yellow col-span-4 ${className}`} {...props} />
}

export function TourStopContent({ className, ...props }) {
  return <section className={`mx-12 col-span-5 ${className}`} {...props} />
}

export function TourStopMedia({ className, ...props }) {
  return <section className={`flex flex-col justify-between col-span-3 ml-12 lg:ml-0 ${className}`} {...props} />
}

export function TourStopPhotos({ children, className, ...props }) {
  return (
    <section className={`${className} mt-6`} {...props}>
      {children}
    </section>
  )
}
