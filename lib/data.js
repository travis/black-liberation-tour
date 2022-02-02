// @ts-check

/** @type {[number, number]} */
export const thirtiethAndWest = [37.820064, -122.273499]

/**
 * `from` is the slug of another TourStop
 * @typedef {{
 *   lat: number
 *   lng: number
 *   name: string
 *   htmlName?: string
 *   address: string
 *   slug: string
 *   img: string
 *   from?: string
 * }} TourStop
 */

/** @type {Array<TourStop>} */
export const tourLocations = [
  {
    lat: 37.817330852742,
    lng: -122.27412728836,
    name: "St. Augustine's Episcopal Church",
    htmlName: "St. Augustine's<br />Episcopal Church",
    address: '2624 West Street',
    slug: '/places/st-augustines',
    img: '/places/st-augustines.jpg',
  },
  {
    lat: 37.819864610235,
    lng: -122.27185963988,
    name: 'Annette Miller',
    address: '682 30th Street',
    slug: '/places/annette-miller',
    img: '/places/annette-miller.jpg',
  },
  {
    lat: 37.82336033834,
    lng: -122.27013845278,
    name: 'Surrounded by Freeways',
    address: '34th and Martin Luther King, Jr. Way',
    slug: '/places/freeways',
    img: '/places/freeways.jpg',
  },
  {
    lat: 37.823640732162,
    lng: -122.27132017791,
    name: 'Delilah Beasley House',
    address: '705 34th Street',
    slug: '/places/delilah-beasley-house',
    img: '/places/delilah-beasley-house.jpg',
  },
  {
    lat: 37.822756447119,
    lng: -122.27385750675,
    name: 'C.L. Dellums',
    address: '829 Brockhurst',
    slug: '/places/cl-dellums',
    img: '/places/cl-dellums.jpg',
  },
  {
    lat: 37.823201695257,
    lng: -122.27571344477,
    name: 'Northwest Branch YMCA',
    address: 'Market and Brockhurst',
    slug: '/places/ymca',
    img: '/places/ymca.jpg',
  },
  {
    lat: 37.821085574737786,
    lng: -122.27620709073791,
    name: 'Black Liberation',
    address: 'Market Street at 30th and San Pablo',
    slug: '/places/black-liberation',
    img: '/murals/black-liberation.jpg',
  },
  {
    lat: 37.822396752284334,
    lng: -122.27675950901121,
    name: 'North Oakland Branch Library',
    htmlName: 'North Oakland<br />Branch Library',
    address: '3134 San Pablo Avenue',
    slug: '/places/north-oakland-library',
    img: '/places/north-oakland-library.jpg',
  },
  {
    lat: 37.821904350144,
    lng: -122.27679258347,
    name: "Flint's Bar-B-Q",
    address: '3114 San Pablo Avenue',
    slug: '/places/flints',
    img: '/places/flints.jpg',
  },
  {
    lat: 37.82635151866093,
    lng: -122.27849541534424,
    name: 'California Hotel',
    address: '35th and San Pablo',
    slug: '/places/california-hotel',
    img: '/places/california-hotel.jpg',
  },
]

/** @type {Record<string, TourStop>} */
export const tourStop = tourLocations.reduce((m, stop) => {
  m[stop.slug] = stop
  return m
}, {})

/**
 * @typedef {{
 *   name: string
 *   instagram?: string
 * }} MuralArtist
 */

/**
 * @typedef {TourStop & {
 *   artists?: Array<MuralArtist>
 *   blurb?: string
 *   date?: string
 *   audio?: string
 *   description?: string
 *   supplement?: string[]
 * }} MuralStop
 */

/** @type {Array<MuralStop>} */
export const muralStops = [
  {
    lat: 37.81714035552329,
    lng: -122.27279862698364,
    name: 'Legacy, Vast Like Us',
    address: '691 - 27th Street',
    slug: '/murals/vast-legacy',
    img: '/murals/vast-legacy.jpg',
    date: '2018',
    artists: [
      { name: 'Alex Bowman', instagram: 'Alexbowman' },
      { name: 'Leah Tumerman', instagram: 'leahtumerman' },
    ],
    blurb:
      'The mural, “Legacy, Vast Like Us,” is a “small selection of women who’ve contributed greatly to Oakland’s civic, cultural, and political identity. The mural was created in a collaboration between Leah and Alex Bowman. It depicts women dressed in their Sunday best, Amanda Wright stands next to Gertrude Stein, just a little to the left of Angela Davis, on 27th Street in West Oakland. She is one of a selection of notable women from the East Bay.”',
  },
  {
    lat: 37.818570008803505,
    lng: -122.27191475581971,
    name: 'Ancestral Waters',
    address: 'Durant Mini Park - 29th St.',
    slug: '/murals/ancestral-waters',
    img: '/murals/ancestral-waters.jpg',
    from: '/murals/vast-legacy',
    artists: [{ name: 'JAMM the Artist', instagram: 'jammtheartist' }, { name: 'Daniel Panko' }],
    blurb: 'A project of <a href="https://www.ahc-oakland.org/">Attitudinal Healing Connection<a>.',
    description: `
      “We held design parties in the park where neighbors of all ages were able
      to give us input on their favorite colors, animals, books, philosophers and
      plants—sources of inspiration and excitement about life—we interwove those
      elements with the ancestral roots of the people and neighborhood, reaching
      back for generations to bring forward the light within anyone viewing the
      mural.”

      <a href="http://www.jammtheartist.com/ancestral-waters">Ancestral
      Waters</a> on jammtheartist.com
    `,
  },
  {
    lat: 37.8204153594982,
    lng: -122.27089916627045,
    name: 'Woman in Pink',
    address: '31st and MLK',
    slug: '/murals/woman-in-pink',
    img: '/murals/woman-in-pink.jpg',
    date: '2020',
    from: '/murals/ancestral-waters',
    artists: [{ name: 'Ignacia', instagram: 'djignacia' }],
    description: `
      Artist’s statement: "This piece is to signify the dualities in ourselves.
      Linked with the night, is the day to the right (the Calypso Queen mural). Their
      instruments are similar to their soul and they are floating on flowers that
      are also their dresses, showing they are one with nature."
    `,
  },
  {
    lat: 37.82048138854311,
    lng: -122.27086014721971,
    name: 'Calypso Queen',
    address: '31st and MLK',
    slug: '/murals/calypso-queen',
    img: '/murals/calypso-queen.jpg',
    from: '/murals/woman-in-pink',
    artists: [{ name: 'Momma Oni', instagram: 'honey.of.myrrh' }],
    description: `
      Inspired by pristine nature, sacred geometry and the beauty of
      motherhood, Oni’s artwork aims to reflect divine creation. This piece is
      inspired by the Caribbean and <a
      href="https://en.wikipedia.org/wiki/Orisha">Orisha</a> culture. Designed
      with community upliftment in mind, Oni used bright colors and the rhythm of
      music to highlight the strength and glory of the Goddess.
    `,
  },
  {
    lat: 37.82057531331944,
    lng: -122.2709573932541,
    name: 'Title Unknown',
    address: '31st and MLK',
    slug: '/murals/title-unknown',
    img: '/murals/title-unknown.jpg',
    from: '/murals/calypso-queen',
    artists: [{ name: 'Marina Perez-Wong', instagram: 'themissionblue' }],
    description: `
      ELEGUA: head, shell, keys
      <br />
      <br />
      Note from Artist: “<a
      href="https://en.wikipedia.org/wiki/Elegua">Elegua</a> is always mentioned
      first in any ceremony, because without his permission, the doors to
      communication with other Orishas stay closed” so I worked on it first and
      the day after I completed it, Yemaya came to me in a dream in the form of a
      Tsunami Tidal wave. I was going to paint <a
      href="https://en.wikipedia.org/wiki/Yem%E1%BB%8Dja">Yemaya</a> next. I kept
      praying to her while I worked.”
    `,
  },
  {
    lat: 37.821085574737786,
    lng: -122.27620709073791,
    name: 'Black Liberation',
    address: 'Market Street at 30th and San Pablo',
    slug: '/murals/black-liberation',
    img: '/murals/black-liberation.jpg',
    from: '/murals/title-unknown',
    audio: '/audio/murals/black-liberation.mp3',
    artists: [{ name: 'Andre Jones' }, { name: 'Rachel Wolfe' }],
    description: `
      As part of the <a href="https://www.blwt.org/">Black Liberation Walking
      Tour</a> launch celebration, attendees were invited to vote between several
      proposals for a new mural.  This was the winning entry, and features <a
      href="https://oaklandwiki.org/Ruth_Beckford">Ruth Beckford</a>, <a
      href="https://oaklandwiki.org/C._L._Dellums">C.L. Dellums</a>, <a
      href="https://oaklandwiki.org/St._Augustine%27s_Episcopal_Church">St.
      Augustine’s Church</a>, the <a
      href="https://oaklandwiki.org/California_Hotel">California Hotel</a>, and
      more.
      <br/>
      <br/>
      Press play  to hear Andre Jones, the founder of Bay Area Mural Program,
      describe his approach to creating community art and the collaborative
      process behind this mural. As you listen, contemplate the power of what it
      means for a community to determine what they want on their walls.
    `,
    supplement: [
      `
        As you stroll through the <a
        href="https://oaklandwiki.org/Hoover-Foster">Hoover-Foster neighborhood</a>
        on the <a href="https://www.blwt.org/">Black Liberation Walking Tour</a>,
        you’ll notice a vast collection of vibrant and ever-changing art. Just as
        stories can be passed down through generations by stories and songs, many
        of these murals celebrate the rich legacy of this area. “One of my favorite
        things about this neighborhood is the cultural affirmation I feel from the
        street art,” said tour organizer and local resident David Peters.
      `,
      `
        <figure>
          <blockquote style="background: rgba(0,0,0,0.2); padding: 2.5rem;">
            <p>
              “When Black people see ourselves reflected in our spaces, it affirms
              who we are in the world and the culture and the history that we carry with
              us.”&nbsp;&nbsp;
            </p>
            <br />
            <cite>David Peters</cite>
          </blockquote>
        </figure>
      `,
      `
        The mural that you’re looking at right now is the result of a collaboration
        between artists, activists, and community members. After reaching out to
        gather ideas about what images should be represented on this wall, the <a
        href="https://thebamp.org/">Bay Area Mural Program</a>, which has its
        headquarters down the street in the California Hotel, created this collage
        celebrating themes of Black and Indigenous power.&nbsp;
      `,
      `
        In the upper left corner, you’ll see a painting of legendary dance teacher <a
        href="https://oaklandwiki.org/Ruth_Beckford">Ruth Beckford</a>, who grew up
        in Oakland and helped launch the <a
        href="https://oaklandwiki.org/Free_Breakfast_for_Children_Program">Black
        Panthers’ Free Breakfast Program</a> at <a
        href="https://oaklandwiki.org/St._Augustine%27s_Episcopal_Church">St.
        Augustine’s Episcopal Church</a>. Below her is <a
        href="https://oaklandwiki.org/C._L._Dellums">C.L. Dellums</a>, who lived
        only a few blocks from here while he was leading an effort to organize the
        <a
        href="https://oaklandwiki.org/Brotherhood_of_Sleeping_Car_Porters">Brotherhood
        of Sleeping Car Porters</a>, America’s first nationwide Black union.
        Throughout the rest of the mural, you’ll find an iconic image from 2020’s
        Black Lives Matter uprising, and various other depictions celebrating the
        beauty and resilience of Black liberation.&nbsp;
      `,
    ],
  },
  {
    lat: 37.821185475108884,
    lng: -122.27649041415557,
    name: 'Medu Neter',
    address: '31st and San Pablo',
    slug: '/murals/medu-neter',
    img: '/murals/medu-neter.jpg',
    from: '/murals/black-liberation',
    artists: [
      { name: 'Natty Rebel', instagram: 'nattyrebelart' },
      { name: 'Rtystk', instagram: 'kissmyblackarts' },
    ],
    description: `
      “Medu Neta” is an illustration of the power and the playfulness of the Black
      Woman.  She reads ancient Egyptian text as she uses her alchemic power to
      bubble over her shoulder.
    `,
  },
  {
    lat: 37.82126434206667,
    lng: -122.27657814774629,
    name: 'Deadeyes',
    address: '31st and San Pablo',
    slug: '/murals/dead-eyes',
    img: '/murals/dead-eyes.jpg',
    from: '/murals/medu-neter',
    artists: [{ name: 'Deadeyes', instagram: 'deadeyes_ptv' }],
    description: `
      Artist’s Statement: I go by Deadeyes and have been making art in the Bay
      Area for over 20 years. I usually paint a mask or one of my characters but
      I decided to do something completely original.
      <br />
      <br />
      This character I wanted to give a regal feel. The high collared jacket was
      a play off of the jackets from Bram Stoker’s Dracula. I imagine this
      character as a diplomat, traveling the world conducting peace keeping
      meetings.
    `,
  },
  {
    lat: 37.82298770675031,
    lng: -122.27594679695395,
    name: 'Loyal to my Soil',
    address: 'Market and Brockhurst',
    slug: '/murals/loyal-to-my-soil',
    img: '/murals/loyal-to-my-soil.jpg',
    date: 'July 2013 – February 2014',
    from: '/murals/dead-eyes',
    artists: [
      { name: 'Juana Alicia' },
      { name: 'Cece Carpio' },
      { name: 'Robert Liu-Trujillo' },
      { name: 'Miguel Perez' },
      { name: 'True Colors' },
      { name: 'Erin Yoshi' },
    ],
    blurb: `
      Artists are from <a href="https://www.trustyourstruggle.org/">Trust Your Struggle Collective</a>.
    `,
    description: `
      <strong>Project Sponsor</strong>: City of Oakland
      <br />
      <br />
      The title for the tile mural is West Oakland Roots: Loyal to My Soil,
      composed of a total of nine panels. The main and central panel is located
      at the entrance of the building facing Market Street. It is an evolving
      mask to tell the cultural history, specifically of the African-American and
      Latino diasporas, of the West Oakland community. The mask closes in the
      center with a portrait of a young woman who is a member of the <a href="https://www.ahc-oakland.org/">Attitudinal
      Healing Center</a> and also Amana Harris’ daughter. Amana Harris is AHC’s
      Associate Director. In the panel located in 33rd Street, Daniel, a youth
      leader of AHC is depicted hitting a drum. Mindful drumming is a practice
      conducted inside AHC to explore the healing art of rhythms and sounds as it
      connects to community building. Two large hands lay below him in the
      posture of a “dap”, the knocking of two fists together to symbolize
      agreement, unity and respect. The final design was painted by Juana Alicia
      Ariaza and the Trust Your Struggle artist collective.
    `,
  },
  {
    lat: 37.82293026184527,
    lng: -122.27757917368011,
    name: 'Senior Super Heroes',
    address: '32nd and San Pablo',
    slug: '/murals/senior-super-heroes',
    img: '/murals/senior-super-heroes.jpg',
    from: '/murals/loyal-to-my-soil',
    artists: [
      { name: 'James Gayles', instagram: 'gaylesjames' },
      { name: 'Natty Rebel', instagram: 'nattyrebelart' },
      { name: 'AHC youth members' },
    ],
    description: `
      Superheroes mural was a Collaboration between St. Mary’s Senior Center
      and lead artist James Gayles facilitated by <a
      href="https://www.ahc-oakland.org/">Attitudinal Healing Connection</a>
      (AHC) Youth Organization. The seniors meet with James to design their ideal
      super heroes. Muralist Andre Jones was brought in to paint the mural with
      the seniors and junior artists from AHC.
    `,
  },
]
