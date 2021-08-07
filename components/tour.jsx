// @ts-check
import Link from 'next/link'
import DirectionsButton from './DirectionsButton'
import Footer from './Footer'
import { Arrow, Instagram } from './icons'

/**
 * @param {{
 *   name: string
 *   location: string
 *   from?: import('../lib/data').TourStop
 *   to: import('../lib/data').TourStop
 *   href?: string
 * }} props
 */
export function TourStopHeader({ name, location, from, to, href = '/tour' }) {
  return (
    <div className="<TourStopHeader>">
      <h1 className="text-9xl md:text-7xl lg:text-5xl text-red mt-24 font-display">
        <Link href={href}>
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

/**
 * @param {{
 *   className?: string
 *   title?: string | import('react').ReactElement
 * }} props
 */
export function TourStopLogo({
  className = '',
  title = (
    <>
      Black Liberation <br /> Walking Tour
    </>
  ),
  ...props
}) {
  return (
    <div
      className={`<TourStopLogo> uppercase font-bold bg-red text-center p-12 text-red-light text-8xl md:text-5xl lg:text-3xl ${className}`}
      {...props}
    >
      <Link href="/">
        <a className="no-underline">{title}</a>
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
      <main className="lg:grid grid-cols-1 lg:grid-cols-12 pb-24 lg:pb-0">{children}</main>
      <Footer />
    </>
  )
}

export function TourStopLeft({ className = '', ...props }) {
  return <section className={`text-center bg-yellow col-span-4 ${className}`} {...props} />
}

export function TourStopMiddle({ className = '', ...props }) {
  return <section className={`mx-24 md:mx-10 col-span-5 ${className}`} {...props} />
}

export function TourStopRight({ className = '', ...props }) {
  return (
    <section className={`flex flex-col justify-between col-span-3 ml-24 md:ml-10 lg:ml-0 ${className}`} {...props} />
  )
}

export function MuralStopLeft({ className = '', ...props }) {
  return (
    <section className={`text-center bg-white col-span-9 mt-24 lg:mt-10 lg:mb-5 lg:pl-10 ${className}`} {...props} />
  )
}

export function MuralStopRight({ className = '', ...props }) {
  return (
    <section
      className={`flex flex-col col-span-3 bg-pink px-24 py-24 md:py-10 md:pl-10  lg:ml-0 lg:mt-10 mb-24 lg:mb-5 lg:p-10 ${className}`}
      {...props}
    />
  )
}

export function TourStopPhotos({ children, className = '', ...props }) {
  return (
    <section className={`${className} lg:mt-10 lg:px-10`} {...props}>
      {children}
    </section>
  )
}

export function TourStopPhoto({ className = '', ...props }) {
  return (
    <a href={props.src} data-lightbox="image-1">
      <img className={`TourStopPhoto w-full object-contain ${className}`} {...props} />
    </a>
  )
}

export function TourParagraph(props) {
  return (
    <p className="my-24 md:my-10" {...props}>
      {props.children}
    </p>
  )
}

export function TourNext({ href, children }) {
  return (
    <Link href={href}>
      <a className="TourNext mx-24 md:mx-10 col-span-5 block no-underline mt-6 bg-red text-white p-8 pb-12 lg:p-4 lg:pb-6 text-7xl md:text-5xl lg:text-3xl text-center uppercase mb-0 lg:mb-10">
        <span style={{ borderBottom: 'var(--borderWidth) solid white' }}>Next Stop: {children}</span>
      </a>
    </Link>
  )
}

/** @param {import('../lib/data').MuralStop} props */
export function MuralInfo({ artists = [], blurb = '', date = '', description = '', audio = '' }) {
  return (
    <>
      {artists.length ? (
        <>
          <span>Artists:</span>
          <br />
          {artists.map(({ name, instagram }) => (
            <>
              <span className="font-bold">{name}</span>
              {instagram && (
                <a className="font-bold no-underline" href={'https://instagram.com/' + instagram}>
                  <Instagram className="inline-block transform scale-125 mr-1" />
                  {instagram}
                </a>
              )}
              <br />
            </>
          ))}
        </>
      ) : null}
      {date && (
        <>
          <br />
          <span>Painted: {date}</span>
        </>
      )}
      {blurb && (
        <>
          <br />
          <span dangerouslySetInnerHTML={{ __html: blurb }}></span>
        </>
      )}
      {/* TODO move description below the image per the design. */}
      {description && (
        <>
          <br />
          <span dangerouslySetInnerHTML={{ __html: description }}></span>
        </>
      )}
      {audio && (
        <>
          <br />
          <TourAudio src={audio} className="w-full" />
        </>
      )}
    </>
  )
}
