import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import DonateButton from '../components/DonateButton'
import SubscribeFollowSection from '../components/SubscribeFollowSection'

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row w-full bg-red-dark text-white">
      <Link href="/">
        <a className="block no-underline flex flex-col lg:w-1/3 align-bottom lg:relative p-24 md:p-10 lg:p-0 text-left sm:text-center lg:text-left">
          <span
            className="lg:absolute lg:left-5 lg:bottom-4 uppercase text-l font-bold"
            style={{ color: 'var(--pink)' }}
          >
            Black Liberation Walking Tour
          </span>
        </a>
      </Link>
      <div className="flex flex-col md:flex-row lg:w-2/3">
        <div className="flex flex-col md:w-1/2 text-left p-24 md:p-10">
          <ContactSection />
          <DonateButton />
        </div>
        <div className="md:w-1/2 p-24 md:p-10">
          <SubscribeFollowSection />
        </div>
      </div>
    </footer>
  )
}
