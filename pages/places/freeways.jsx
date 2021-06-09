import Image from 'next/image'
import Link from 'next/link'

import { tourStop } from '../../lib/data'
import {
  TourStop, TourStopIntro, TourStopLogo, TourStopContent, TourStopHeader,
  TourStopMedia, TourAudio, TourStopPhotos
} from '../../components/tour'

export default function Freeways() {
  return (
    <TourStop>
      <TourStopIntro>
        <TourStopLogo />
        <TourStopPhotos>
          <Image src="/places/freeways.jpg" height={150} width={300} />
        </TourStopPhotos>
      </TourStopIntro>
      <TourStopContent>
        <TourStopHeader
          name="Surrounded By Freeways"
          location="34th and Martin Luther King, Jr. Way"
          from={tourStop['annette-miller']} to={tourStop['freeways']}
        />
                <p className="my-3">
          If you look at a map of West Oakland, you’ll see that the entire area is boxed in by freeways. Where you are standing right now is a perfect example of why these structures have been so harmful to the people who live here.
        </p>

        <p className="my-3">
          The first thing you’ll notice is noise — imagine living next to the constant roar of cars and trucks passing overhead. You’ll also observe that these gigantic concrete corridors create an intimidating border, constraining the mobility of pedestrians. Then there’s the pollution: the embankments and underpasses are a magnet for dumping and litter. Worst of all, the air pollution emitted by nonstop traffic contributes to West Oakland residents having significantly higher rates of congestive heart failure, strokes, and asthma compared to people who live in the hills.
        </p>

        <p className="my-3">
          It’s not a coincidence that the rise of these freeways followed the post-World War II “white flight” era. As affluent suburbanites moved further and further out into new developments (some of which were racially segregated up until the 1970s), the government was willing to accommodate their need for a more convenient commute, regardless of how the freeways would affect neighborhoods like Hoover-Foster. Just to give one example of their destructive impact, Interstate 980, which forms the eastern border of this neighborhood, required 503 homes, 22 businesses, four churches, and dozens of trees to be condemned. Adding insult to injury, many of those who were displaced argue that they weren’t fairly compensated when they lost their property through the eminent domain process used to evict them. A similarly traumatizing process occurred a generation earlier during the construction of I-580, which forms the neighborhood’s northern border.
        </p>

        <p className="my-3">
          In recent years, transportation experts have listed 980 as one of the “worst freeways in the country” and even Mayor Libby Schaff supports proposals for its removal, calling it “a scar across our city that separates residents from opportunity.” To see the benefits of freeway removal, visit Mandela Parkway after you’re done with this walking tour. After the Cypress Structure, a double-decker portion of I-880, collapsed during the 1989 Loma Prieta Earthquake, West Oakland community activists prevented it from being rebuilt, and now that stretch is home to a corridor of diverse plants and walking paths.
        </p>

        <p className="my-3">
          Regardless of what might happen in the future, multiple generations of Hoover-Foster residents have already suffered by living in the shadow of these towering thoroughfares. Click the play button  below to hear longtime resident Alternier Cook describe what this neighborhood was like before the freeways appeared and how their construction immediately impacted her health.
        </p>

      </TourStopContent>
      <TourStopMedia>
        <div></div>
        <TourAudio className="my-12" src="/audio/freeways.mp3" />
      </TourStopMedia>
      <TourStopIntro />
      <TourStopContent className="mt-6 h-24">
      <Link href="/places/delilah-beasley-house">
          <a className="btn py-1">Next Stop: Delilah Beasley House</a>
        </Link>
      </TourStopContent>
      <div>
      </div>
    </TourStop>
  )
}
