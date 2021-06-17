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
  TourStopPhoto,
  TourParagraph,
  TourNext,
} from '../../components/tour'

export default function Dellums() {
  return (
    <TourStop>
      <TourStopIntro>
        <TourStopLogo />
        <TourStopPhotos>
          <TourStopPhoto src="/places/cl-dellums.jpg" height={220} width={300} />
        </TourStopPhotos>
      </TourStopIntro>
      <TourStopContent>
        <TourStopHeader
          name="C.L. Dellums"
          location="829 Brockhurst"
          from={tourStop['delilah-beasley-house']}
          to={tourStop['cl-dellums']}
        />

        <TourParagraph>
          In the decades following the Civil War, working as a porter on one of the Pullman Company’s luxurious “sleeper
          cars” was one of the most coveted positions a Black man could attain. Although the job was demanding – porters
          worked long hours to keep the trains clean and the passengers happy – it was seen as a big step up from
          agricultural labor. As the railroads expanded, the Pullman Company became one of America’s most profitable
          corporations, but while the stockholders became fabulously rich, porters were forced to rely on tips to
          supplement their meager incomes.
        </TourParagraph>

        <TourParagraph>
          In 1925, these workers formed the first nationwide Black union, the Brotherhood of Sleeping Car Porters
          (BSCP), to fight for better wages and less exploitative working conditions. It took a dozen years of bitter
          struggle, but eventually the Brotherhood’s president A. Phillip Randolph won the Pullman Company’s recognition
          of the union, an “unprecedented and almost inconceivable” victory that could not have been achieved without
          the man who lived in this house at 829 Brockurst Street.
        </TourParagraph>

        <TourParagraph>
          During C.L. Dellums’ long career as BSCP vice president, the union played a key role in every significant
          civil rights struggle from the Montgomery bus boycott to the March on Washington. Working from a humble office
          above a billiard hall on Seventh Street in West Oakland, Dellums helped lead the campaign to ban “whites-only”
          hiring practices in defense industries, setting the stage for a massive influx from the South to California
          during World War II, when shipyards hired tens of thousands of Black migrants. During this era, famous civil
          rights leaders including Thurgood Marshall, Ralph Bunche, and Tarea Hall Pittman often visited Dellums’ house
          for long strategy sessions.
        </TourParagraph>

        <TourParagraph>
          In 1948, C.L. Dellums became the NAACP’s first West Coast director and used his authority to challenge police
          brutality, employment discrimination, and other systemic forms of racial oppression. His daughter, Marva, who
          was born in this house, must have been influenced by her father from a young age, because her first words were
          “I know my rights!” His nephew Ron would carry on the family’s political legacy through his tenure as a
          congressman and Oakland mayor.
        </TourParagraph>

        <TourParagraph>
          Despite his status as an iconic labor leader, C.L. Dellums never left this neighborhood, remaining in this
          house until he passed away in 1989. A life-size statue of Dellums in front of the Jack London Square Amtrak
          station commemorates his lifetime of achievements, which included fighting for better pay and working
          conditions for the many Pullman porters who called West Oakland home. Press the play button below to hear C.L.
          Dellums and his daughter Marva discussing this historic struggle.
        </TourParagraph>
      </TourStopContent>
      <TourStopMedia>
        <div></div>
        <TourAudio className="my-12" src="/audio/cl-dellums.mp3" />
      </TourStopMedia>
      <TourStopIntro />
      <TourNext href="/places/ymca">Northwest Branch YMCA</TourNext>
      <div></div>
    </TourStop>
  )
}
