import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-6xl text-center p-6">Black Liberation Walking Tour</h1>
        <div className="mt-12 flex flex-row">
          <Link href="/places/flints">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Flint’s BBQ
                </h2>
                <Image src="/places/flints.jpg" height={222} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/annette-miller">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Annette Miller
                </h2>
                <Image src="/places/annette-miller.jpg" height={200} width={300} />
              </div>
            </a>
          </Link>
          <Link href="/places/northwest-ymca">
            <a className="p-6">
              <div>
                <h2 className="text-3xl text-center mb-6">
                  Northwest Branch YMCA
                </h2>
                <Image src="/places/northwest-ymca.jpg" height={241} width={300} />
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
