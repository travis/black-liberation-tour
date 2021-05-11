import Image from 'next/image'
import Link from 'next/link'
import Map from '../components/Map'

const thirtiethAndWest = [37.820064, -122.273499]


const tourLocations = [
  [37.817330852742, -122.27412728836, "St. Augustine's Episcopal Church", "2624 West St."],
  [37.819864610235, -122.27185963988, "Annette Miller", "682 - 30th St."],
  [37.82336033834,  -122.27013845278, "Surrounded by Freeways", "34th and Martin Luther King, Jr. Way"],
  [37.823640732162, -122.27132017791, "Delilah Beasley", "705 - 34th St."],
  [37.822756447119, -122.27385750675, "C.L. Dellums", "829 Brockhurst St."],
  [37.823201695257, -122.27571344477, "M. Robinson Baker YMCA", "Market and Brockhurst"],
  [37.820612790318, -122.27630889563, "North Oakland Branch Library", "30th and San Pablo"],
  [37.821904350144, -122.27679258347, "Flint's Bar-B-Q", "3114 San Pablo Ave."]
]


export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-6xl text-center p-6">Black Liberation Walking Tour</h1>
        <Map className="h-96" zoom={15} center={thirtiethAndWest} markers={tourLocations}/>
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
