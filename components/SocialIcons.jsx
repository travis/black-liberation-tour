import { Facebook, Instagram } from "./icons";

export default function SocialIcons() {
  return (
    <div className="flex flex-row gap-4 mt-6 text-pink-dark">
      <a href="https://www.instagram.com/oakblwt/" aria-label="BLWT Instagram">
        <Instagram className="w-12 h-12" />
      </a>
      <a href="https://www.facebook.com/OakBLWT/" aria-label="BLWT Facebook Page">
        <Facebook className="w-12 h-12" />
      </a>
    </div>
  );
}
