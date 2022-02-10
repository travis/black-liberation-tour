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

export default function BlackLiberationMural() {
  return (
    <TourStop>
      <TourStopLeft>
        <TourStopLogo />
        <TourStopPhotos>
          <TourStopPhoto src="/murals/black-liberation.jpg" height={200} width={300} />
        </TourStopPhotos>
      </TourStopLeft>

      <TourStopMiddle>
        <TourStopHeader
          name="Black Liberation Mural"
          location="Market Street at 30th and San Pablo"
          from={tourStop['/places/ymca']}
          to={tourStop['/places/black-liberation']}
        />

        <TourParagraph>
          As part of the <a href="https://www.blwt.org/">Black Liberation Walking
            Tour</a> launch celebration, attendees were invited to vote between several
          proposals for a new mural.  This was the winning entry, and features <a href="https://oaklandwiki.org/Ruth_Beckford">Ruth Beckford</a>, <a href="https://oaklandwiki.org/C._L._Dellums">C.L. Dellums</a>, <a href="https://oaklandwiki.org/St._Augustine%27s_Episcopal_Church">St.
            Augustine’s Church</a>, the <a href="https://oaklandwiki.org/California_Hotel">California Hotel</a>, and
          more.
          </TourParagraph>
        <TourParagraph>
          Press play  to hear Andre Jones, the founder of Bay Area Mural Program,
          describe his approach to creating community art and the collaborative
          process behind this mural. As you listen, contemplate the power of what it
          means for a community to determine what they want on their walls.
        </TourParagraph>
        <TourParagraph>
          As you stroll through the <a href="https://oaklandwiki.org/Hoover-Foster">Hoover-Foster neighborhood</a>&nbsp;
          on the <a href="https://www.blwt.org/">Black Liberation Walking Tour</a>,
          you’ll notice a vast collection of vibrant and ever-changing art. Just as
          stories can be passed down through generations by stories and songs, many
          of these murals celebrate the rich legacy of this area. “One of my favorite
          things about this neighborhood is the cultural affirmation I feel from the
          street art,” said tour organizer and local resident David Peters.
        </TourParagraph>
        <TourParagraph>
          <figure>
            <blockquote style={{ background: "rgba(0,0,0,0.2)", padding: "2.5rem" }}>
              <p>
                “When Black people see ourselves reflected in our spaces, it affirms
                who we are in the world and the culture and the history that we carry with
                us.”&nbsp;&nbsp;
              </p>
              <br />
              <cite>David Peters</cite>
            </blockquote>
          </figure>
        </TourParagraph>

        <TourParagraph>
          The mural that you’re looking at right now is the result of a collaboration
          between artists, activists, and community members. After reaching out to
          gather ideas about what images should be represented on this wall, the <a
            href="https://thebamp.org/">Bay Area Mural Program</a>, which has its
          headquarters down the street in the California Hotel, created this collage
          celebrating themes of Black and Indigenous power.&nbsp;

        </TourParagraph>
        <TourParagraph>
          In the upper left corner, you’ll see a painting of legendary dance teacher <a
            href="https://oaklandwiki.org/Ruth_Beckford">Ruth Beckford</a>, who grew up
          in Oakland and helped launch the <a
            href="https://oaklandwiki.org/Free_Breakfast_for_Children_Program">Black
            Panthers’ Free Breakfast Program</a> at <a
              href="https://oaklandwiki.org/St._Augustine%27s_Episcopal_Church">St.
            Augustine’s Episcopal Church</a>. Below her is <a
              href="https://oaklandwiki.org/C._L._Dellums">C.L. Dellums</a>, who lived
          only a few blocks from here while he was leading an effort to organize the&nbsp;
          <a
            href="https://oaklandwiki.org/Brotherhood_of_Sleeping_Car_Porters">Brotherhood
            of Sleeping Car Porters</a>, America’s first nationwide Black union.
          Throughout the rest of the mural, you’ll find an iconic image from 2020’s
          Black Lives Matter uprising, and various other depictions celebrating the
          beauty and resilience of Black liberation.&nbsp;

        </TourParagraph>
      </TourStopMiddle>
      <TourStopRight>
        <div></div>
        <TourAudio className="my-12" src="/audio/murals/black-liberation.mp3" />
      </TourStopRight>

      <TourStopLeft />
      <TourNext href="/places/flints">Flint's BBQ</TourNext>
      <div></div>
    </TourStop>
  )
}
