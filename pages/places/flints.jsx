import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import { tourStop } from '../../lib/data'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">Flint’s BBQ</h1>
        <div className="flex">
          <h3 className="text-2xl">3114 San Pablo Ave</h3>

          <DirectionsButton from={tourStop['north-oakland-library']} to={tourStop['flints']} />
        </div>
        <Image className="float-right" src="/places/flints.jpg" height={222} width={300} />

        <p className="my-3">
          Close your eyes and imagine the sweet, smokey smell of ribs and hot links wafting out of this building and drawing a hungry crowd of BBQ lovers. Throughout the 1970s and 80s it wasn’t uncommon to see people lined up along San Pablo Ave. to get a precious plate of family-cooked food here.
        </p>

        <p className="my-3">
          The first Flint’s was started in 1968 by Willie Flintroy, who opened the restaurant in East Oakland’s Havenscourt neighborhood after relocating his family from Monroe, Louisiana. Dorothy Everett, who would later launch the Everett and Jones Barbecue chain, was one of the first employees. Unfortunately, Willie passed away before he could see the full realization of his dream, but his brothers Freeman and Neil kept the business alive. That first Flint’s proved to be so popular that the Flintroy family soon opened another restaurant on Shattuck Ave and this one right in the heart of Hoover-Foster.
        </p>

        <p className="my-3">
          According to local BBQ connoisseurs, the secret to Flint’s success was the sauce, which remains a closely guarded secret to this day. Customers loved the sauce so much that many would ask for it to be poured on the potato salad and even mop it out of to-go bags with the slices of white bread that accompanied every order.
        </p>

        <p className="my-3">
          This Flint’s location closed in the late 1980s after several of the family members who were running it passed away, but there is now hope for a revival, because the younger generation is working to rebuild the business. Crystal Martin was barely old enough to help peel potatoes when the restaurant closed, but seeing this empty building always filled her with the desire to rekindle her grandfather Willie’s legacy. Along with her sister Lynette, who worked here while she was a student at McClymonds High School, Crystal is currently hosting a series of BBQ popup events to build momentum for a true rebirth of Flint’s. Press play below to hear Lynette and Crystal share memories of family history and hopes for the future.
        </p>
        <audio controls className="my-12">
          <source src="/audio/flints.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <h2 className="text-3xl mt-12">Links</h2>
        <h4 className="text-xl my-1"><a href="https://clownfish-lime-9b27.squarespace.com/">Flint’s BBQ Website</a></h4>
        <h4 className="text-xl mt-1 mb-12"><a href="https://facebook.com/originalflintsbbq/">Flint’s BBQ on Facebook</a></h4>
          
        <Link href="/places/california-hotel">
          <a className="btn py-1">Next Stop: California Hotel</a>
        </Link>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
