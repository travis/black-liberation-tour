import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Black Liberation Tour</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        ></script>

        {/* TODO we can create masonry layouts with CSS nowadays, but this easier to stick into the app. Replace this with pure-CSS version... */}
        <script src="/lib/jquery-2.2.4.min.js"></script>
        <script src="/lib/jquery.mosaicflow.min.js"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PVMS731GQN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PVMS731GQN');
          `,
          }}
        />
      </Head>
      <body className="text-5xl md:text-3xl lg:text-xl">
        <Component {...pageProps} />
      </body>
    </>
  )
}

export default MyApp
