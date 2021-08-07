// @ts-check
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

export default function Home() {
  return (
    <TourStop>
      <TourStopLeft>
        <TourStopLogo />
        <TourStopPhotos>
          <TourStopPhoto src="/places/ymca.jpg" height={241} width={300} />
        </TourStopPhotos>
      </TourStopLeft>
      <TourStopMiddle>
        <TourStopHeader
          name="Northwest Branch YMCA"
          location="Corner of Brockhurst and Market"
          from={tourStop['/places/cl-dellums']}
          to={tourStop['/places/ymca']}
        />

        <TourParagraph>
          In the early 1940s, there wasn’t a single Black person on Oakland’s City Council or serving at any level of
          city government. By 1977, a single generation later, Lionel Wilson was elected as Oakland’s first Black mayor
          and African Americans were represented on City Council and throughout local politics. This YMCA that you’re
          standing in front of right now was a major force behind this transformation — and Josh Rose was one of the
          neighborhood leaders who helped build this institution.
        </TourParagraph>
        <TourParagraph>
          When Josh Rose came to Oakland in 1939, the Northwest YMCA was located inside a storefront on San Pablo Ave.
          It was his job to help raise the funds to build a proper facility for the growing Hoover-Durant community.
          With much support from the community, $60,000 was raised, and the new Northwest YMCA, featuring a gymnasium,
          kitchen, and various meeting spaces, opened in 1946. Besides hosting sporting events and game nights, it
          quickly became a hub of community organizing, with church groups, civic clubs, and the NAACP utilizing the
          facilities.
        </TourParagraph>

        <TourParagraph>
          Through his position as the YMCA’s director, Josh was able to hire young Black men from the community to staff
          the organization, providing many with their first job, which ranged from custodian to counselor. His
          leadership soon attracted the attention of City Council, who appointed Josh to the Board of Playground
          Directors (later called the Oakland Recreation Commission) in 1947, making him the first Black person to ever
          serve on an Oakland governing body. His next major step up the ladder came when Josh began his tenure on City
          Council, a position he held from 1964 until 1977. During this era, many of his former proteges also entered
          Oakland government, breaking through racial barriers at the Port Commission, fire department, and other
          influential offices.
        </TourParagraph>
        <TourParagraph>
          In 2018, Mary Ellen Butler memorialized her parents in a book titled Heart and Soul: The Remarkable Courtship
          and Marriage of Josh and Virginia Craft Rose, which featured this tribute from Ernest Gregoire, one of the
          many young men who were mentored by Josh: “The leadership, self-confidence, and work ethic learned from my
          experiences at the Y have paid great dividends throughout my life. Starting with my time in the military, then
          as a student athlete, followed by a 50-year career as an educator, [my career was] fueled by the skills I
          developed at the North Oakland Y and orchestrated by Josh Rose.”
        </TourParagraph>
        <TourParagraph>
          Press PLAY below to hear Mary Ellen Butler discuss the history of the Northwest Branch YMCA as an incubator of
          rising Black leadership.
        </TourParagraph>
      </TourStopMiddle>
      <TourStopRight>
        <div></div>
        <TourAudio className="my-12" src="/audio/ymca.mp3" />
      </TourStopRight>
      <TourStopLeft />
      <TourNext href="/places/north-oakland-library">North Oakland Branch Library</TourNext>
      <div></div>
    </TourStop>
  )
}
