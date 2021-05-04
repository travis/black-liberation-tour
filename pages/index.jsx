import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Black Liberation Walking Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-12 max-w-5xl m-auto">
        <h1 className="text-5xl text-center p-6">Black Liberation Walking Tour</h1>
        <p className="text-center mb-6 text-xl">
          Black Spaces Matter.  The Black Liberation Walking Tour is a community-led cultural asset map that celebrates Hoover Durant’s
          multigenerational Black history and culture, asserts resident voice, and documents sites of cultural and historical importance
          of our neighborhood. We celebrate belonging through the 100 year narrative ribbon that leads from the early West Coast civil
          rights movement through the second wave of the Great Migration to the Black Liberation actions of the present day.
        </p>
        <p className="text-center mb-6 text-xl">
          A project of the Friends of the Hoover-Durant Public Library (FOHDPL), the Black Liberation Walking Tour captures oral
          histories to document the lives and culture of long-time residents,  historical figures, and rapidly disappearing former
          Black spaces. We are creating this archive to mitigate cultural erasure and physical displacement. We're galvanizing a
          collaborative development effort grounded in claiming community and cultural spaces by working towards the reestablishment of the
          Hoover Durant Public Library branch in our neighborhood and acquiring community controlled commercial spaces.
        </p>
        <p className="text-center mb-6 text-xl">
          For press inquiries or ways to support, please email <a href="mailto:oakblwt@gmail.com">oakblwt@gmail.com</a>
        </p>
        <p className="text-center mb-6 text-xl">
          To volunteer or suggest stories, fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJGmJ4yErUyeOpQ3aMYhCmjG100gxedC_YzVJ6X77L34ygtw/viewform">our brief survey</a>.
        </p>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
