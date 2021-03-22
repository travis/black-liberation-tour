import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Black Liberation Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-12">
        <h1 className="text-6xl text-center p-6">Black Liberation Walking Tour</h1>
        <div className="mt-12 flex flex-row">
          <Link href="/places/flints">
            <a>
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Flint’s BBQ
                </h2>
                <Image src="/places/flints.jpg" height={300} width={300} />
              </div>
            </a>
          </Link>
        </div>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}