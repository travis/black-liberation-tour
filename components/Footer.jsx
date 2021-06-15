import ContactSection from '../components/ContactSection'
import DonateButton from '../components/DonateButton'
import SubscribeFollowSection from '../components/SubscribeFollowSection'

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row w-full bg-red-dark text-white">
      <div className="flex flex-col lg:w-1/3 align-bottom relative">
        <span className="absolute left-5 bottom-5 uppercase text-l font-bold" style={{ color: 'var(--pink)' }}>
          Black Liberation Walking Tour
        </span>
      </div>
      <div className="flex flex-col sm:flex-row lg:w-2/3">
        <div className="flex flex-col sm:w-1/2 text-left p-10">
          <ContactSection />
          <DonateButton />
        </div>
        <div className="sm:w-1/2 p-10">
          <SubscribeFollowSection />
        </div>
      </div>
    </footer>
  )
}
