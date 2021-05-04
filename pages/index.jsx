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
          The Black Liberation Walking Tour is a community-led cultural asset map that celebrates Hoover Durant’s Black and
          multigenerational history, asserts resident voice, and documents sites of cultural and historical importance of our neighborhood.
        </p>
        <p className="text-center mb-6 text-xl">
          A project of the Friends of the Hoover-Durant Public Library (FOHDPL), the Black Liberation Walking
          Tour captures oral histories to document the knowledge and memories of long-time residents,  historical figures,
          and former Black spaces. We're galvanizing collaborative development efforts grounded in local Black History and
          working towards the 2022 reopening of the Hoover Durant Public Library branch in our neighborhood, public art,
          and former Black spaces. We're galvanizing collaborative development efforts grounded in local Black History
          and working towards the reestablishment of the Hoover Durant Public Library branch in our neighborhood.
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
