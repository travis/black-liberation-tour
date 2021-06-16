import { useState } from 'react'
import Image from 'next/image'
import { DownChevron, Close, Facebook, Instagram } from '../components/icons'
import ContactSection from '../components/ContactSection'
import SubscribeFollowSection from '../components/SubscribeFollowSection'
import PinkButton from '../components/PinkButton'
import DonateButton from '../components/DonateButton'

export default function Home() {
  const [moreHidden, setMoreHidden] = useState(true)
  return (
    <div className="">
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:auto-rows-fr	bg-black text-white min-h-screen">
        <div className="py-12 px-20 bg-pink-dark relative">
          {/* This next/image position:relative  ^ requirement is just weird. */}
          <Image src="/home-logo.png" layout="fill" className="object-contain w-full h-full"></Image>
        </div>
        <div className={`relative`}>
          <Image src="/places/CA-hotel.jpg" layout="fill" className="object-cover"></Image>
        </div>
        <div className={`py-12 px-6 flex flex-col justify-center items-start ${!moreHidden && 'row-span-2'}`}>
          <h4 className="uppercase text-xl font-bold mb-6">Black Spaces Matter.</h4>
          <p className="mb-6">
            The Black Liberation Walking Tour is a community-led cultural asset map that celebrates Hoover Durant’s
            multigenerational Black history and culture, asserts resident voice, and documents sites of cultural and
            historical importance of our neighborhood. We celebrate belonging through the 100 year narrative ribbon that
            leads from the early West Coast civil rights movement through the second wave of the Great Migration to the
            Black Liberation actions of the present day.
          </p>
          <p className={`mb-6 ${moreHidden && 'hidden'}`}>
            A project of the Friends of the Hoover-Durant Public Library (FOHDPL), the Black Liberation Walking Tour
            captures oral histories to document the lives and culture of long-time residents, historical figures, and
            rapidly disappearing former Black spaces. We are creating this archive to mitigate cultural erasure and
            physical displacement. We're galvanizing a collaborative development effort grounded in claiming community
            and cultural spaces by working towards the reestablishment of the Hoover Durant Public Library branch in our
            neighborhood and acquiring community controlled commercial spaces.
          </p>
          {moreHidden ? (
            <button
              className="focus:outline-none uppercase text-yellow-500 underline text-xl font-bold no-underline"
              style={{ color: 'var(--pink)', borderBottom: 'var(--borderWidth) solid var(--pink)' }}
              onClick={() => setMoreHidden(false)}
            >
              More <DownChevron className="inline" />
            </button>
          ) : (
            <button className="focus:outline-none" onClick={() => setMoreHidden(true)}>
              <Close className="text-xl text-yellow-500 w-10 h-10" />
            </button>
          )}
        </div>
        <div className={`py-12 px-12 bg-red-dark flex flex-col justify-center items-start`}>
          <h3 className="text-xl uppercase font-bold">
            Black Liberation Walking
            <br /> Tour Launch Party
          </h3>
          <p className="mt-6 mb-6">
            Join us on Juneteenth for the official launch of the Black Liberation Walking Tour.
          </p>
          <PinkButton href="https://www.facebook.com/events/572413663743456" className="w-3/4">
            RSVP on the Event Page
          </PinkButton>
          <br />
          <DonateButton className="w-3/4" />
          <div className="flex-grow" />
          <p className="mt-6">
            <em>Thank you sponsors NAME and NAME NAME for allocating the grant and making this happen!</em>
          </p>
        </div>
        <div className={`bg-red flex flex-col justify-center items-start ${!moreHidden && 'md:hidden lg:flex'}`}>
          <div
            className="text-3xl m-auto font-display border-white px-6 py-6"
            style={{ borderWidth: 'var(--borderWidth)' }}
          >
            <h3 className="border-white pb-3" style={{ borderBottomWidth: 'var(--borderWidth)' }}>
              Tour Coming Soon
            </h3>
          </div>
        </div>
        <div className={`p-6 bg-red-dark flex flex-col justify-center items-start ${!moreHidden && 'xl:hidden'}`}>
          <ContactSection />
          <SubscribeFollowSection />
        </div>
      </main>
    </div>
  )
}
