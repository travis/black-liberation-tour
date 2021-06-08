import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { DownChevron, Close, Facebook, Instagram } from '../components/icons'
import ContactSection from '../components/ContactSection'
import SubscribeFollowSection from '../components/SubscribeFollowSection'

export default function Home() {
  const [moreHidden, setMoreHidden] = useState(true)
  return (
    <div className="">
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-black text-white min-h-screen">
        <div className="py-12 px-20 h-96">
          <h1 className="text-5xl text-center font-display uppercase py-6 border-t-4 border-b-4">
            Black Liberation Walking Tour
          </h1>
          <h5 className="uppercase text-center text-yellow-600 mt-6">
            Hoover-Durant Public Library
          </h5>
        </div>
        <div className={`relative h-96`}>
          <Image src="/places/flints.jpg" layout="fill"></Image>
        </div>
        <div className={`py-12 px-6 min-h-96 ${!moreHidden && 'row-span-2'}`}>
          <h4 className="uppercase text-xl font-bold">Black Spaces Matter.</h4>
          <p className="mb-6">
            The Black Liberation Walking Tour is a community-led cultural asset map that celebrates Hoover Durant’s
            multigenerational Black history and culture, asserts resident voice, and documents sites of cultural and historical importance
            of our neighborhood. We celebrate belonging through the 100 year narrative ribbon that leads from the early West Coast civil
            rights movement through the second wave of the Great Migration to the Black Liberation actions of the present day.
          </p>
          <p className={`mb-6 ${moreHidden && 'hidden'}`}>
            A project of the Friends of the Hoover-Durant Public Library (FOHDPL), the Black Liberation Walking Tour captures oral
            histories to document the lives and culture of long-time residents,  historical figures, and rapidly disappearing former
            Black spaces. We are creating this archive to mitigate cultural erasure and physical displacement. We're galvanizing a
            collaborative development effort grounded in claiming community and cultural spaces by working towards the reestablishment of the
            Hoover Durant Public Library branch in our neighborhood and acquiring community controlled commercial spaces.
         </p>
          {moreHidden ? (
            <button className="focus:outline-none uppercase text-yellow-500 underline text-xl font-bold" onClick={() => setMoreHidden(false)}>
              More <DownChevron className="inline" />
            </button>
          ) : (
            <button className="focus:outline-none" onClick={() => setMoreHidden(true)}>
              <Close className="text-xl text-yellow-500 w-10 h-10" />
            </button>
          )}
        </div>
        <div className={`py-12 px-12 bg-red-dark`}>
          <h3 className="text-xl uppercase font-bold">Black Liberation Walking<br /> Tour Launch Party</h3>
          <p className="my-12">
            Join us on Juneteenth for the official launch of the Black Liberation Walking Tour.
          </p>
          <a className="btn bg-pink-dark text-black font-display"
             href="https://www.facebook.com/events/572413663743456">
            RSVP on the Event Page
           </a>
        </div>
        <div className={`h-96 bg-red flex flex-col justify-center ${!moreHidden && 'md:hidden xl:block'}`}>
          <h3 className="text-3xl m-auto font-display underline border-white border-2 px-6 py-3">Tour Coming Soon</h3>
        </div>
        <div className={`p-6 h-96 bg-red-dark ${!moreHidden && 'xl:hidden'}`}>
          <ContactSection />
          <SubscribeFollowSection />
        </div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
