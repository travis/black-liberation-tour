const thirtiethAndWest = [37.820064, -122.273499]
export const center = thirtiethAndWest;



export const tourLocations = [
  [37.817330852742, -122.27412728836, "St. Augustine's Episcopal Church", "2624 West Street", "st-augustines"],
  [37.819864610235, -122.27185963988, "Annette Miller", "682 30th Street", "annette-miller"],
  [37.82336033834,  -122.27013845278, "Surrounded by Freeways", "34th and Martin Luther King, Jr. Way", "freeways"],
  [37.823640732162, -122.27132017791, "Delilah Beasley House", "705 34th Street", "delilah-beasley-house"],
  [37.822756447119, -122.27385750675, "C.L. Dellums", "829 Brockhurst", "cl-dellums"],
  [37.823201695257, -122.27571344477, "Northwest Branch YMCA", "Market and Brockhurst", "ymca"],
  [37.820612790318, -122.27630889563, "North Oakland Branch Library", "30th and San Pablo", "north-oakland-library"],
  [37.821904350144, -122.27679258347, "Flint's Bar-B-Q", "3114 San Pablo Avenue", "flints"],
  [37.82635151866093, -122.27849541534424, "California Hotel", "35th and San Pablo", "california-hotel"]
]

export const tourStop = tourLocations.reduce(
  (m, [lat, lng, name, address, slug]) => {
    m[slug] = {lat, lng, name, address}
    return m
  },
 {})
