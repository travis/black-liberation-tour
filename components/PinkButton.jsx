export default function PinkButton(props) {
  return (
    <a className="btn bg-pink-dark text-black font-display" href={props.href}>
      {props.children}
    </a>
  );
}
