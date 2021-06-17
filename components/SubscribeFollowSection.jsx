import SocialIcons from './SocialIcons'

export default function SubscribeFollowSection() {
  return (
    <>
      <div>
        <form
          action="https://blwt.us6.list-manage.com/subscribe/post?u=4a8461aa6093c9aa9880f2190&amp;id=566be82014"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <label htmlFor="mce-EMAIL" className="block">
            Subscribe to our newsletter:
          </label>
          <div className="flex flex-row my-7 md:my-2">
            <input
              className="w-2/3 md:w-auto p-10 md:p-2 bg-pink text-black"
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <input
              className="w-1/3 md:w-auto bg-pink-dark text-black underline font-bold px-10 md:px-2 font-display lowercase"
              type="submit"
              value="Subscribe"
              name="subscribe"
              readOnly
            />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_4a8461aa6093c9aa9880f2190_566be82014" tabIndex="-1" value="" readOnly />
          </div>
        </form>
      </div>
      <SocialIcons />
    </>
  )
}
