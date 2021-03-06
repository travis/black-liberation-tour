import { tourStop } from '../../lib/data'
import {
  TourStop,
  TourStopLeft,
  TourStopLogo,
  TourStopMiddle,
  TourStopHeader,
  TourStopRight,
  TourAudio,
  TourStopPhotos,
  TourStopPhoto,
  TourParagraph,
  TourNext,
} from '../../components/tour'

export default function Delilah() {
  return (
    <TourStop>
      <TourStopLeft>
        <TourStopLogo />
        <TourStopPhotos>
          <TourStopPhoto src="/places/delilah-beasley-house.jpg" height={380} width={300} />
        </TourStopPhotos>
      </TourStopLeft>
      <TourStopMiddle>
        <TourStopHeader
          name="Delilah Beasley House"
          location="705 34th Street"
          from={tourStop['/places/freeways']}
          to={tourStop['/places/delilah-beasley-house']}
        />

        <TourParagraph>
          One of the goals of this walking tour is to preserve Black history. Sadly, many stories of California’s
          earliest African-American residents have already been lost. For many years, mainstream history books ignored
          the contributions of Black cowboys, miners, and settlers, leaving an unfillable gap in the collective memory.
          This gap would have been much bigger if not for the heroic efforts of Delilah Beasley.
        </TourParagraph>

        <TourParagraph>
          Although it’s not known exactly when Beasley was born in Ohio (either 1867 or 1871), she moved from the
          Midwest to the East Bay around 1910. Upon arriving here, she quickly realized that the last generation of
          “negro pioneers” from the Gold Rush era were dying out and that nobody had recorded their stories. She spent
          nearly a decade researching this history of African Americans in California. In addition to interviewing
          elders, she combed through old journals, crumbling newspapers, and dusty archives. In 1919, she self-published
          a compilation of her findings entitled “The Negro Trail Blazers of California.” Although the book didn’t sell
          many copies at first, it provided a crucial document for future generations of historians.
        </TourParagraph>

        <TourParagraph>
          Beasley was also the first Black woman to write a regular column for a major American newspaper. Beginning in
          1923, she chronicled newsworthy items about the local Black community in her weekly feature called “Activities
          Among Negroes.” During an era when people of color were either ignored or portrayed negatively in the media,
          Beasley shined a positive light on Black culture by covering everything from weddings to visits by national
          NAACP leaders and famous entertainers.
        </TourParagraph>

        <TourParagraph>
          Although Beasley was laid to rest at St. Mary’s Cemetery in 1934, you are now standing in front of the house
          where she lived the last years of her life. Press play below to hear more about Delilah Beasley from another
          champion of Black history, Dorothy Lazard of the Oakland Public Library.
        </TourParagraph>
      </TourStopMiddle>
      <TourStopRight>
        <div></div>
        <TourAudio className="my-12" src="/audio/delilah-beasley-house.mp3" />
      </TourStopRight>
      <TourStopLeft />
      <TourNext href="/places/cl-dellums">C.L. Dellums</TourNext>
      <div></div>
    </TourStop>
  )
}
