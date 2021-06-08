import { Facebook, Instagram } from './icons'

export default function SubscribeFollowSection() {
  return (
    <>
      <div>
        <form action="https://blwt.us6.list-manage.com/subscribe/post?u=4a8461aa6093c9aa9880f2190&amp;id=566be82014" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <label htmlFor="mce-EMAIL" className="text-xl block">Subscribe to our newsletter:</label>
          <div className="flex flex-row gap-4 my-2">
            <input type="email" name="EMAIL" className="p-2" id="mce-EMAIL" placeholder="email address" required />
            <input type="submit" value="Subscribe" name="subscribe" className="btn" readOnly />
          </div>
          <div style={{ position: 'absolute', left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_4a8461aa6093c9aa9880f2190_566be82014" tabIndex="-1" value="" readOnly />
          </div>
        </form>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <a href="https://www.facebook.com/OakBLWT/" aria-label="BLWT Facebook Page">
          <Facebook className="w-12 h-12" />
        </a>
        <a href="https://www.instagram.com/oakblwt/" aria-label="BLWT Instagram">
          <Instagram className="w-12 h-12" />
        </a>
      </div>
    </>
  )
}