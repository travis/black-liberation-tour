import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import { tourStop } from '../../lib/data'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">North Oakland Branch Library</h1>
        <div className="flex">
          <h3 className="text-2xl">30th and San Pablo</h3>
          <DirectionsButton from={tourStop['ymca']} to={tourStop['north-oakland-library']} />
        </div>

        <Image className="float-right" src="/places/north-oakland-library.jpg" height={243} width={300} />

        <p className="my-3">
          As a young girl growing up in this neighborhood, Alternier Cook has fond memories of spending time at the local library, which she could easily walk to after school. Back then, residents could choose between the North Oakland Branch Library, near the California Hotel, or the smaller Telegrove Branch Library. Unfortunately, the Telegrove Branch closed down and then the North Oakland Branch finally shut its doors permanently in 1981, after changing locations several times. Its final location was 3134 San Pablo Avenue, just up the block from where you’re standing right now.
        </p>

        <p className="my-3">
          The four-decade absence of this vital neighborhood institution is why Alternier and several other longtime residents formed the Friends of Hoover-Durant Public Library. The name is a nod to this area’s former moniker, Hoover-Durant, before the Durant Elementary school was torn down and replaced with the Marcus Foster Building. The goal of bringing a library back to this community started with a spontaneous suggestion during a Neighborhood Crime Prevention Council meeting, but after several years of organizing and building momentum, this dream moved one step closer to becoming reality on December 12, 2017.  On that date, the Friends of Hoover-Durant Public Library launched their first Street Corner Library here at this intersection.
        </p>

        <p className="my-3">
          After collecting dozens of donated books, the Friends set up their pop-up library in order to redistribute books freely throughout the community and also to encourage local residents to register for Oakland Public Library cards. The event was such a success that the Friends have made the Street Corner Library a regular occurrence. According to Alternier, these efforts aren’t just about providing her neighbors with free books. Explaining why the Friends are focused on reestablishing a library in her community, she said, “One of the ways for the African American community to become liberated is to have access to information.”
        </p>

        <p className="my-3">
          Click the play button below to hear Alternier Cook discuss the origins of Friends of Hoover-Durant Public Library.
        </p>
        <audio controls className="my-12">
          <source src="/audio/north-oakland-library.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Link href="/places/flints">
          <a className="btn py-1">Next Stop: Flint's BBQ</a>
        </Link>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
