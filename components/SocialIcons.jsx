import { Facebook, Instagram } from './icons'

export default function SocialIcons() {
  return (
    <div className="flex flex-row gap-4 mt-12 md:mt-6 text-pink-dark">
      <a href="https://www.instagram.com/oakblwt/" aria-label="BLWT Instagram">
        <Instagram className="w-48 h-48 md:w-16 md:h-16 xl:w-12 xl:h-12" />
      </a>
      <a href="https://www.facebook.com/OakBLWT/" aria-label="BLWT Facebook Page" className="transform scale-95">
        <Facebook className="w-48 h-48 md:w-16 md:h-16 xl:w-12 xl:h-12" />
      </a>
    </div>
  )
}
