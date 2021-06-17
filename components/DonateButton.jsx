import PinkButton from './PinkButton'

export default function DonateButton(props) {
  return (
    <PinkButton href="/donate" className={props.className}>
      Donate to the project
    </PinkButton>
  )
}
