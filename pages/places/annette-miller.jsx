import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import ContactDonateSection from '../../components/ContactSection'
import SubscribeFollowSection from '../../components/SubscribeFollowSection'
import { tourStop } from '../../lib/data'

function TourStopHeader({ name, location, from, to }) {
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

function TourStopFooter({ }) {
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

function TourStopLogo({ className, ...props }) {
  return (
    <div className={`uppercase font-bold bg-red text-center p-12 text-red-light text-xl mb-6 ${className}`} {...props}>
      Black Liberation<br /> Walking Tour
    </div>
  )
}

function TourStop({ children }) {
  return (
    <>
      <main className="grid grid-cols-12">
        {children}
      </main>
      <TourStopFooter />
    </>
  )
}

function TourAudio({ src, ...props }) {
  return (
    <audio controls {...props}>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

function TourStopIntro({ className, ...props }) {
  return (
    <section className={`text-center bg-yellow col-span-4 ${className}`} {...props} />
  )
}

function TourStopContent({ className, ...props }) {
  return (
    <section className={`mx-12 col-span-5 ${className}`} {...props} />
  )
}

function TourStopMedia({ className, ...props }) {
  return (
    <section className={`flex flex-col justify-between col-span-3 ${className}`} {...props} />
  )
}


export default function AnnetteMiller() {
  return (
    <TourStop>
      <TourStopIntro>
        <TourStopLogo />
        <Image src="/places/annette-miller.jpg" height={200} width={300} />
      </TourStopIntro>
      <TourStopContent>
        <TourStopHeader
          name="Annette Miller"
          location="682 30th St, Oakland"
          from={tourStop['st-augustines']}
          to={tourStop['annette-miller']}
        />

        <p className="my-3">
          Annette Miller was born in 1966, the same year that the Black Panther Party was started not far from here. Just like the founders of the Black Panthers, Annette can also trace her roots to the Deep South. Her grandparents met while migrating to California and brought many of their rural traditions with them to Oakland. Her grandfather raised chickens, tended a garden, and cultivated fruit trees in the yard that you’re looking at right now. He also taught Annette about the importance of owning property in order to protect yourself from being displaced, a lesson that she never forgot.
          </p>

        <p className="my-3">
          Although her father was stationed all over the United States during his career in the Army, Annette was raised here in Oakland, graduating from McClymonds High in 1984, and has remained in this neighborhood while bringing up her own four children. For a long time, she knew just about everybody on this block. Most of the residents were African American families who had been here since the post-World War II era. But all that started to change around the time of the Great Recession. Low-income people of color had been disproportionately targeted by predatory subprime lenders and, as a result, West Oakland suffered the highest rate of foreclosures in the entire Bay Area.
          </p>

        <p className="my-3">
          Several properties on this block were purchased by a Piedmont-based real estate speculator, and in the surrounding area, hundreds of homes that had once been owned by Black families were scooped up by large institutional investors. The economic shift was dramatic: Between 2013 and 2018, the average home price in Hoover-Foster increased by an astonishing 240 percent. This red hot market made Annette’s home a tempting target for Deutsche Bank, which held the mortgage.
          </p>

        <p className="my-3">
          Back in 2006, Annette’s uncle had refinanced that house and then died unexpectedly without leaving a will. When the bank eventually learned of this situation in 2014, they attempted to evict the Miller family. However, drawing upon her skills as a community organizer, Annette sought assistance from the Department of Veterans Affairs and ACCE (Alliance of Californians for Community Empowerment), to challenge the foreclosure. Click the play to hear the story of what happened during Annete’s showdown with a massive international financial institution.
        </p>
      </TourStopContent>
      <TourStopMedia>
        <div></div>
        <TourAudio className="my-12" src="/audio/annette-miller.mp3" />
      </TourStopMedia>
      <TourStopIntro />
      <TourStopContent className="mt-6 h-24">
        <Link href="/places/freeways">
          <a className="btn bg-red">Next Stop: Surrounded By Freeways</a>
        </Link>
      </TourStopContent>
      <div>
      </div>
    </TourStop>
  )
}
