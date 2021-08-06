// @ts-check

/** @type {[number, number]} */
export const thirtiethAndWest = [37.820064, -122.273499]

/**
 * @typedef {{
 *   lat: number
 *   lng: number
 *   name: string
 *   htmlName?: string
 *   address: string
 *   slug: string
 *   img: string
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
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'North Oakland Branch Library',
    htmlName: 'North Oakland<br />Branch Library',
    address: '30th and San Pablo',
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

/** @type {Array<TourStop>} */
export const muralStops = [
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Legacy, Vast Like Us',
    address: 'This and That',
    slug: '/murals/vast-legacy',
    img: '/murals/vast-legacy.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Ancestral Waters',
    address: 'TODO',
    slug: '/murals/ancestral-waters',
    img: '/murals/ancestral-waters.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Woman in Pink',
    address: 'TODO',
    slug: '/murals/woman-in-pink',
    img: '/murals/woman-in-pink.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Calypso Queen',
    address: 'TODO',
    slug: '/murals/calypso-queen',
    img: '/murals/calypso-queen.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Black Liberation',
    address: 'TODO',
    slug: '/murals/black-liberation',
    img: '/murals/black-liberation.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Medu Neter',
    address: 'TODO',
    slug: '/murals/medu-neter',
    img: '/murals/medu-neter.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Dead Eyes',
    address: 'TODO',
    slug: '/murals/dead-eyes',
    img: '/murals/dead-eyes.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Loyal to my Soil',
    address: 'TODO',
    slug: '/murals/loyal-to-my-soil',
    img: '/murals/loyal-to-my-soil.jpg',
  },
  {
    lat: 37.820612790318,
    lng: -122.27630889563,
    name: 'Senior Super Heroes',
    address: 'TODO',
    slug: '/murals/senior-super-heroes',
    img: '/murals/senior-super-heroes.jpg',
  },
]
