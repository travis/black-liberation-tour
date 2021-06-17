import Link from 'next/link'
import DirectionsButton from './DirectionsButton'
import Footer from './Footer'
import { Arrow } from './icons'

export function TourStopHeader({ name, location, from, to }) {
  return (
    <div className="<TourStopHeader> contents">
      <h1 className="text-9xl md:text-7xl lg:text-5xl text-red mt-24 font-display">
        <Link href="/tour">
          <a className="no-underline">
            <Arrow className="mb-12 lg:mb-4" style={{ transform: 'scaleX(-1)' }} />
            {name}
          </a>
        </Link>
      </h1>
      <h3 className="lg:text-lg my-10 md:my-6 lg:mb-4 italic">{location}</h3>
      <DirectionsButton from={from} to={to} />
    </div>
  )
}

export function TourStopLogo({ className, ...props }) {
  return (
    <div
      className={`<TourStopLogo> uppercase font-bold bg-red text-center p-12 text-red-light text-8xl md:text-5xl lg:text-3xl ${className}`}
      {...props}
    >
      <Link href="/">
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
      <main className="grid grid-cols-1 lg:grid-cols-12 pb-24 lg:pb-0">{children}</main>
      <Footer />
    </>
  )
}

export function TourStopIntro({ className, ...props }) {
  return <section className={`text-center bg-yellow col-span-4 ${className}`} {...props} />
}

export function TourStopContent({ className, ...props }) {
  return <section className={`mx-24 md:mx-10 col-span-5 ${className}`} {...props} />
}

export function TourStopMedia({ className, ...props }) {
  return (
    <section className={`flex flex-col justify-between col-span-3 ml-24 md:ml-10 lg:ml-0 ${className}`} {...props} />
  )
}

export function TourStopPhotos({ children, className, ...props }) {
  return (
    <section className={`${className} lg:mt-10 lg:px-10`} {...props}>
      {children}
    </section>
  )
}

export function TourStopPhoto(props) {
  return <img height={200} width={300} className="w-full object-contain" style={{ maxHeight: '65vh' }} {...props} />
}

export function TourParagraph(props) {
  return <p className="my-24 md:my-10">{props.children}</p>
}

export function TourNext({ href, children }) {
  return (
    <Link href={href}>
      <a className="TourNext mx-24 md:mx-10 col-span-5 block no-underline mt-6 bg-red text-white p-8 pb-12 lg:p-4 lg:pb-6 text-6xl md:text-5xl lg:text-3xl text-center uppercase mb-0 lg:mb-10">
        <span style={{ borderBottom: 'var(--borderWidth) solid white' }}>Next Stop: {children}</span>
      </a>
    </Link>
  )
}
