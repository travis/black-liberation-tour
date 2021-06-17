import PinkButton from './PinkButton'

export default function DonateButton(props) {
  return (
    // <PinkButton href="/donate" className={props.className}>
    <PinkButton
      href="https://checkout.square.site/merchant/MLYXDJBFTCV40/checkout/PUSMAQM4JW5ZZOR3XNIR3UKO"
      className={props.className}
      target="_blank"
    >
      Donate to the project
    </PinkButton>
  )
}
