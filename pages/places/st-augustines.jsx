import Image from 'next/image'
import Link from 'next/link'
import { tourStop } from '../../lib/data'
import {
  TourStop,
  TourStopIntro,
  TourStopLogo,
  TourStopContent,
  TourStopHeader,
  TourStopMedia,
  TourAudio,
  TourStopPhotos,
} from '../../components/tour'

export default function Home() {
  return (
    <TourStop>
      <TourStopIntro>
        <TourStopLogo />
        <TourStopPhotos>
          <Image src="/places/st-augustines.jpg" height={342} width={300} />
        </TourStopPhotos>
      </TourStopIntro>
      <TourStopContent>
        <TourStopHeader
          name="St Augustine's Episcopal Church"
          location="525 29th Street"
          to={tourStop['st-augustines']}
        />

        <p className="my-3">
          Father Earl Neil was no stranger to conflict when he came to Oakland in 1967 to serve as the Rector of St.
          Augustine’s Episcopal Church. Originally from Minnesota, Father Neil was the only Black student in his
          seminary class and constantly had to challenge racism in the church hierarchy throughout his early career. As
          the Civil Rights movement gained steam, Father Neil utilized his role as a religious leader to participate in
          Mississippi’s “Freedom Summer” and Rev. Martin Luther King Jr.’s March on Selma. The horrific brutality
          unleashed during these historic events convinced Father Neil that Black people had the right to defend
          themselves.
        </p>

        <p className="my-3">
          Soon after arriving in Oakland, Father Neil established himself as the spiritual advisor to the Black Panther
          Party. This relationship started when Ruth Beckford, a member of St. Augustine’s congregation and a renowned
          Afro-Haitian dance instructor, invited Father Neil to visit Huey Newton in Alameda County Jail, where he was
          facing murder charges for a deadly shootout with Oakland Police. Neil’s friendship with Newton led to the
          Black Panther Party using St. Augustine’s as a meeting place. As the bonds between the Party and the
          congregation deepened, Beckford and Neil worked with Panther co-founder Bobby Seale to establish the Panthers’
          first Free Breakfast Program here to serve the students of nearby Durant Elementary School.
        </p>

        <p className="my-3">
          Press Play to hear Father Earl Neil discuss the role that the Panthers played in this community, how he and
          Panther leader David Hilliard stopped the police from raiding the church, and why FBI director J. Edgar Hoover
          saw the Party’s “Survival Programs” as a threat that needed to be crushed.
        </p>
      </TourStopContent>
      <TourStopMedia>
        <div></div>
        <TourAudio className="my-12" src="/audio/st-augustines-panthers.mp3" />
      </TourStopMedia>
      <TourStopIntro />
      <TourStopContent className="mt-6">
        <p className="my-3">
          Although some members of St. Augustine’s congregation were hesitant about their church becoming the spiritual
          home of a revolutionary organization, many of these concerns were alleviated during a joint memorial event for
          Rev. Martin Luther King Jr. and Bobby Hutton, a young Panther who was gunned down by Oakland police near
          DeFremery Park shortly after Rev. King’s assassination. This tragic occasion united the Panthers and the
          congregation not only in grief, but also in reinforcing the common goal of Black liberation. Tragically, this
          building would end up hosting several funerals for Black Panthers during Father Neil’s tenure here, as the
          heavy hand of law enforcement cracked down on the Party. Jonathan Jackson’s memorial service was held here in
          1970 and his brother George’s followed one year later.
        </p>
        <p className="my-3">
          Written behind bars, “Soledad Brother” made George Jackson one of the most influential voices of his
          generation and his murder by prison guards during an alleged escape attempt resulted in a massive outpouring
          of anguish. So many mourners came to pay tribute that while Father Neil, Huey Newton, Bobby Seale, Elaine
          Brown and others eulogized Jackson within the walls of St. Augustine’s many thousands more gathered in these
          streets to offer their respects. Press Play below to hear Father Neil remember the “sea of humanity” that
          converged on this neighborhood to celebrate the life and legacy of George Jackson in August 1971. This clip
          also includes archival audio of Black Panthers co-founder Bobby Seale discussing the Party’s response to
          Jackson’s death.
        </p>
      </TourStopContent>
      <TourStopMedia>
        <div></div>
        <TourAudio className="my-12" src="/audio/st-augustines-george-jackson.mp3" />
      </TourStopMedia>
      <TourStopIntro />
      <TourStopContent className="mt-6 h-24">
        <Link href="/places/annette-miller">
          <a className="btn py-1">Next Stop: Annette Miller</a>
        </Link>
      </TourStopContent>
      <div></div>
    </TourStop>
  )
}
