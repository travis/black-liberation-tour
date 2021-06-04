import Image from 'next/image'
import Link from 'next/link'
import DirectionsButton from '../../components/DirectionsButton'
import { tourStop } from '../../lib/data'

export default function Home() {
  return (
    <div className="">
      <main className="p-12">
        <h1 className="text-4xl text-center p-6">C.L. Dellums</h1>
        <div className="flex">
          <h3 className="text-2xl">829 Brockhurst</h3>
          <DirectionsButton from={tourStop['delilah-beasley-house']} to={tourStop['cl-dellums']} />
        </div>

        <Image className="float-right" src="/places/cl-dellums.jpg" height={220} width={300} />

        <p className="my-3">
          In the decades following the Civil War, working as a porter on one of the Pullman Company’s luxurious “sleeper cars” was one of the most coveted positions a Black man could attain. Although the job was demanding – porters worked long hours to keep the trains clean and the passengers happy – it was seen as a big step up from agricultural labor. As the railroads expanded, the Pullman Company became one of America’s most profitable corporations, but while the stockholders became fabulously rich, porters were forced to rely on tips to supplement their meager incomes.
        </p>

        <p className="my-3">
          In 1925, these workers formed the first nationwide Black union, the Brotherhood of Sleeping Car Porters (BSCP), to fight for better wages and less exploitative working conditions. It took a dozen years of bitter struggle, but eventually the Brotherhood’s president A. Phillip Randolph won the Pullman Company’s recognition of the union, an “unprecedented and almost inconceivable” victory that could not have been achieved without the man who lived in this house at 829 Brockurst Street.
        </p>

        <p className="my-3">
          During C.L. Dellums’ long career as BSCP vice president, the union played a key role in every significant civil rights struggle from the Montgomery bus boycott to the March on Washington. Working from a humble office above a billiard hall on Seventh Street in West Oakland, Dellums helped lead the campaign to ban “whites-only” hiring practices in defense industries, setting the stage for a massive influx from the South to California during World War II, when shipyards hired tens of thousands of Black migrants. During this era, famous civil rights leaders including Thurgood Marshall, Ralph Bunche, and Tarea Hall Pittman often visited Dellums’ house for long strategy sessions.
        </p>

        <p className="my-3">
          In 1948, C.L. Dellums became the NAACP’s first West Coast director and used his authority to challenge police brutality, employment discrimination, and other systemic forms of racial oppression. His daughter, Marva, who was born in this house, must have been influenced by her father from a young age, because her first words were “I know my rights!” His nephew Ron would carry on the family’s political legacy through his tenure as a congressman and Oakland mayor.
        </p>

        <p className="my-3">
          Despite his status as an iconic labor leader, C.L. Dellums never left this neighborhood, remaining in this house until he passed away in 1989. A life-size statue of Dellums in front of the Jack London Square Amtrak station commemorates his lifetime of achievements, which included fighting for better pay and working conditions for the many Pullman porters who called West Oakland home. Press the play button  below to hear C.L. Dellums and his daughter Marva discussing this historic struggle.
        </p>

        <audio controls className="my-12">
          <source src="/audio/cl-dellums.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Link href="/places/ymca">
          <a className="btn py-1">Next Stop: Northwest Branch YMCA</a>
        </Link>
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
