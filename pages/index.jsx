import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DownChevron, Close, Cap } from '../components/icons'

export default function Home() {
  const [moreHidden, setMoreHidden] = useState(true)
  return (
    <div className="">
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-black text-white min-h-screen">
        <div className="py-12 px-20 h-96">
          <h1 className="text-5xl text-center font-serif uppercase py-6 border-t-4 border-b-4">
            Black Liberation Walking Tour <Cap/>
          </h1>
          <h5 className="uppercase text-center text-yellow-600 mt-6">
            Hoover-Durant Public Library
          </h5>
        </div>
        <div className={`py-12 px-6 h-96 ${!moreHidden && 'row-span-2'}`}>
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
        <div className="bg-yellow-600 text-black uppercase py-20 px-16 h-96">
          <p>
            <h3 className="text-3xl mb-6 font-serif ml-3">Stations:</h3>
            <ul className="text-2xl">
              <li className="pl-3">
                Coming Soon
              </li>
              <li className="border-b-2 border-black hidden">
                <Link href="/places/flints">
                  <a className="no-underline text-black block pl-3">Flint's BBQ</a>
                </Link>
              </li>
              <li className="border-b-2 border-black pl-3 hidden">
                California Hotel
              </li>
              <li className="border-b-2 border-black pl-3 hidden">
                Mural
              </li>
              <li className="pl-3 hidden">
                More Sites
              </li>
            </ul>
          </p>
        </div>
        <div className="relative h-96">
          <Image src="/places/flints.jpg" layout="fill"></Image>
        </div>
        <div className={`${!moreHidden && 'hidden'}`}>

        </div>
        <div className="p-6 h-96">
          <p className="mb-6 text-xl">
            For press inquiries or ways to support,<br /> please email <a href="mailto:oakblwt@gmail.com">oakblwt@gmail.com</a>
          </p>
          <p className="mb-6 text-xl">
            To volunteer or suggest stories,<br /> fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJGmJ4yErUyeOpQ3aMYhCmjG100gxedC_YzVJ6X77L34ygtw/viewform">our brief survey</a>.
        </p>
        </div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
