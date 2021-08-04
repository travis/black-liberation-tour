import { useState } from 'react'
import Link from 'next/link'
import { DownChevron, Close } from '../components/icons'
import ContactSection from '../components/ContactSection'
import SubscribeFollowSection from '../components/SubscribeFollowSection'
import PinkButton from '../components/PinkButton'
import DonateButton from '../components/DonateButton'

export default function Home() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="<Home>">
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr bg-black text-white min-h-screen">
        <div className="py-24 px-24 md:py-12 md:px-12 bg-pink-dark relative sm:h-auto">
          {/* This next/image position:relative  ^ requirement is just weird. */}
          <img src="/home-logo.png" className="object-contain w-full h-full absolute inset-0" />
        </div>
        <div>
          <img src="/places/CA-hotel.jpg" className="object-cover w-full h-full block" />
        </div>
        <div
          className={`py-24 px-24 md:py-12 md:px-12 flex flex-col justify-center items-start ${
            showMore && 'row-span-2'
          }`}
        >
          <h4 className="uppercase text-8xl md:text-xl font-bold mb-24 md:mb-6">Black Spaces Matter.</h4>
          <p className="mb-24 md:mb-6">
            The Black Liberation Walking Tour (BLWT) is a community-led cultural asset map celebrating Hoover-Foster’s
            multi-generational Black history and culture. It asserts resident voices and documents sites of cultural and
            historical significance in our neighborhood. We celebrate belonging through the 100 year narrative ribbon
            leading from the early West Coast civil rights movement through the second wave of the Great Migration to
            the Black Liberation actions of the present day.
          </p>
          <p className={`mb-24 md:mb-6 ${!showMore && 'hidden'}`}>
            A project of the West Oakland Cultural Action Network (WOCAN) , the BLWT captures oral histories to document
            the lives, art, and culture of long-time residents, historical figures, and rapidly disappearing former
            Black cultural spaces. We are creating this archive to mitigate cultural erasure and physical displacement.
            We’re galvanizing a collaborative development effort grounded in claiming community and cultural spaces by
            working towards the reestablishment of the Hoover-Durant Public Library branch and acquiring community
            controlled commercial spaces.
          </p>
          {!showMore ? (
            <button
              className="focus:outline-none uppercase text-yellow-500 underline md:text-xl font-bold no-underline"
              style={{ color: 'var(--pink)', borderBottom: 'var(--borderWidth) solid var(--pink)' }}
              onClick={() => setShowMore(true)}
            >
              More <DownChevron className="inline h-20 w-20 md:h-5 md:w-5" />
            </button>
          ) : (
            <button className="focus:outline-none" onClick={() => setShowMore(false)}>
              <Close className="md:text-xl text-yellow-500 h-24 w-24 md:w-10 md:h-10" />
            </button>
          )}
        </div>
        <div className={` bg-red-dark relative`} style={{ background: 'url(/flags.svg)', backgroundSize: 'cover' }}>
          <img className="absolute top-0 left-0 w-full h-full" src="/flags.svg" />
          <div className="absolute top-0 left-0 w-full h-full py-24 px-24 md:py-12 md:px-12 flex flex-col justify-center items-start">
            <h3 className="text-8xl md:text-xl mb-24 md:mb-6 uppercase font-bold">
              Black Liberation Walking <br />
              Tour Mural Unveiling
            </h3>
            <p className="mb-24 md:mb-6">
              Join us on August 7th for the unveiling of the new Black Liberation Walking Tour mural
            </p>
            <DonateButton className="w-5/6 md:w-3/4" />
            <div className="hidden md:flex-grow mb-24 md:mb-6" />
            <br />
            <p>
              <em>
                <strong>Thank you to our sponsors!</strong>
              </em>
            </p>
            {/* prettier-ignore */}
            <p>
                <a className="inline-block pr-5" href="https://communityvisionca.org/">Community Vision</a>
                <a className="inline-block pr-5" href="https://www.penumbrainc.com/">Penumbra</a>
                <a className="inline-block pr-5" href="https://ebaldc.org/">EBALDC</a>
                <a className="inline-block pr-5" href="https://www.theflourishcollective.org/">Flourish Collective</a>
                <a className="inline-block pr-5" href="https://www.mlb.com/athletics">Oakland Athletics</a>
                <a className="inline-block pr-5" href="https://www.nba.com/warriors/">Golden State Warriors</a>
            </p>
          </div>
        </div>
        <div className={`bg-red flex flex-col justify-center items-start ${showMore && 'md:hidden xl:flex'}`}>
          <Link href="/tour">
            <a
              className="no-underline block text-8xl md:text-3xl m-auto font-display border-white p-24 md:p-6"
              style={{ borderWidth: 'var(--borderWidth)' }}
            >
              <h3 className="border-white pb-3 uppercase" style={{ borderBottomWidth: 'var(--borderWidth)' }}>
                Discover The Tour
              </h3>
            </a>
          </Link>
        </div>
        <div
          className={`py-24 px-24 md:py-12 md:px-12 md:bg-black xl:bg-red-dark flex flex-col justify-center items-start ${
            showMore && 'xl:hidden'
          }`}
        >
          <ContactSection />
          <SubscribeFollowSection />
        </div>
      </main>
    </div>
  )
}
