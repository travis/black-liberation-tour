import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { DownChevron, Close, Facebook, Instagram } from '../components/icons'
import ContactSection from '../components/ContactSection'
import SubscribeFollowSection from '../components/SubscribeFollowSection'
import PinkButton from '../components/PinkButton'
import DonateButton from '../components/DonateButton'

export default function Home() {
  const [moreHidden, setMoreHidden] = useState(true)
  return (
    <div className="">
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-black text-white min-h-screen">
        <div className="py-12 px-20 min-h-96">
          <h1
            className="text-5xl text-center font-display uppercase py-6"
            style={{ borderTopWidth: 'var(--borderWidth)', borderBottomWidth: 'var(--borderWidth)' }}
          >
            Black Liberation Walking Tour
          </h1>
          <h5 className="uppercase text-center text-yellow-600 mt-6">Hoover-Durant Public Library</h5>
        </div>
        <div className={`relative min-h-96`}>
          <Image src="/places/flints.jpg" layout="fill" className="object-cover"></Image>
        </div>
        <div className={`py-12 px-6 min-h-96 ${!moreHidden && 'row-span-2'}`}>
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
        <div className={`py-12 px-12 bg-red-dark min-h-96`}>
          <h3 className="text-xl uppercase font-bold">
            Black Liberation Walking
            <br /> Tour Launch Party
          </h3>
          <p className="mt-6 mb-6">
            Join us on Juneteenth for the official launch of the Black Liberation Walking Tour.
          </p>
          <PinkButton href="https://www.facebook.com/events/572413663743456" className="w-2/3">
            RSVP on the Event Page
          </PinkButton>
          <br />
          <br />
          <DonateButton className="w-2/3" />
          <p className="mt-6">Thank you sponsors NAME and NAME NAME for allocating the grant and making this happen!</p>
        </div>
        <div className={`min-h-96 bg-red flex flex-col justify-center ${!moreHidden && 'md:hidden xl:flex'}`}>
          <div
            className="text-3xl m-auto font-display border-white px-6 py-6"
            style={{ borderWidth: 'var(--borderWidth)' }}
          >
            <h3 className="border-white pb-3" style={{ borderBottomWidth: 'var(--borderWidth)' }}>
              Tour Coming Soon
            </h3>
          </div>
        </div>
        <div className={`p-6 min-h-96 bg-red-dark ${!moreHidden && 'xl:hidden'}`}>
          <ContactSection />
          <SubscribeFollowSection />
        </div>
      </main>

      <footer className=""></footer>
    </div>
  )
}
