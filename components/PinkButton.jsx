export default function PinkButton({ className, href, children }) {
  return (
    <a
      className={
        "btn bg-pink-dark text-black font-displayi border-0 no-underline inline-block pb-3 text-center " +
        (className || "")
      }
      href={href}
    >
      <span className="pb-0.5 px-2" style={{ borderBottomWidth: "var(--borderWidth)" }}>
        {children}
      </span>
    </a>
  );
}
