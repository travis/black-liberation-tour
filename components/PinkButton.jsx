export default function PinkButton({ className, children, ...props }) {
  return (
    <a
      className={
        'btn bg-pink-dark text-black font-displayi border-0 no-underline inline-block pb-14 p-10 md:pb-4 md:p-3 text-center ' +
        (className || '')
      }
      {...props}
    >
      <span className="pb-1 px-4 md:pb-0.5 md:px-2" style={{ borderBottomWidth: 'var(--borderWidth)' }}>
        {children}
      </span>
    </a>
  )
}
