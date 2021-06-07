import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import { tourStop } from '../../lib/data'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">California Hotel</h1>
        <div className="flex">
          <h3 className="text-2xl">35th and San Pablo</h3>
          <DirectionsButton from={tourStop['flints']} to={tourStop['california-hotel']} />
        </div>

        <Image className="float-right" src="/places/california-hotel.png" height={200} width={300} />

        <p className="my-3">
          Few buildings reflect the past century of Oakland’s ever-shifting culture better than the California Hotel. When it opened in 1930, the hotel was intended to serve travelers arriving to the East Bay on the Santa Fe Railroad, which operated a thriving depot a few blocks north at the intersection of San Pablo Ave. and 40th St. During this era of strict racial segregation, only whites were allowed to stay here.
        </p>

        <p className="my-3">
          After a huge influx of African Americans to California during World War II, the Zanzibar Club, which operated on the Hotel’s ground floor, became one of the region’s first major venues to host Black entertainers. However, it wasn’t until new owners bought the Hotel in 1953 that Black people were allowed to book rooms. Once it was listed in the The Negro Motorist Green Book, a famous travel guide that helped Black travelers find accommodations during a time of widespread discrimination, the California Hotel became a legendary destination, attracting such high-profile guests as Billie Holiday, Sam Cooke, Ray Charles, and James Brown. With the rising popularity of Afro Cuban music, Latin performers such as the Escovedo brothers drew big crowds to the Zanzibar with their energetic Mambo parties.
        </p>

        <p className="my-3">
          The construction of I-580 had a disastrous impact on this area due to the noise and air pollution, and after many years of economic decline, the California Hotel was boarded up and abandoned during the 1970s. Although it was reopened in the 1980s to provide subsidized and low-income housing, the Hotel was plagued by rats, bedbugs, and unsanitary living conditions for several decades. Major improvements were finally enacted after the Hotel was purchased by the East Bay Asian Local Development Corporation (EBALDC) in 2011, which has spent the past decade renovating residential units as well as the ground-floor commercial spaces, which are currently occupied by the Oakland Public Conservatory of Music, Bay Area Mural Program, and Magnolia Street Wine Lounge.
        </p>
        <p className="my-3">
          Although the early 2000s was a challenging time at the California Hotel, former resident Alan Laird still has fond memories of his time here. Born and raised in Oakland, Laird operated Expressions Art Gallery in the space formerly occupied by the Zanzibar Club for about five years after being priced out of Old Oakland. In addition to being a painter, Laird is also a minister in the African Methodist Episcopal Church. Click PLAY below to hear Laird explain how he combined his spiritual and artistic practices to turn Expressions Art Gallery into a much-needed community resource.
        </p>
        <audio controls className="my-12">
          <source src="/audio/california-hotel.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="my-3">
          Join the Friends of Hoover Durant Public Library to celebrate the launch of this walking tour, and come share your story about the neighborhood! There will be food, music, and more!
        </p>
        <p className="my-3">
          <dl>
            <dt className="font-bold">When</dt>
            <dd>June 19th, 11am – 4pm</dd>
            <dt className="font-bold">Where</dt>
            <dd><a href="https://www.sparcitplace.com/">SPARC-it-Place near the California Hotel</a></dd>
            <dt className="font-bold">Who</dt>
            <dd>Friends of Hoover Durant Public Library</dd>
          </dl>
        </p>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
