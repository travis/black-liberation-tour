// icons from https://heroicons.com/

export function DownChevron({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function Close({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function Facebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${className}`}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

export function Instagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${className}`}>
      <path d="M11.999 7.377a4.623 4.623 0 100 9.248 4.623 4.623 0 000-9.248zm0 7.627a3.004 3.004 0 110-6.008 3.004 3.004 0 010 6.008z" />
      <path d="M17.884 7.207 A1.078 1.078 0 0 1 16.806 8.285 A1.078 1.078 0 0 1 15.728000000000002 7.207 A1.078 1.078 0 0 1 17.884 7.207 z" />
      <path d="M20.533 6.111A4.605 4.605 0 0017.9 3.479a6.606 6.606 0 00-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 00-2.184.42 4.6 4.6 0 00-2.633 2.632 6.585 6.585 0 00-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 002.186-.419 4.613 4.613 0 002.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 00-.421-2.217zm-1.218 9.532a5.043 5.043 0 01-.311 1.688 2.987 2.987 0 01-1.712 1.711 4.985 4.985 0 01-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 01-1.669-.311 2.985 2.985 0 01-1.719-1.711 5.08 5.08 0 01-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 01.311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 011.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 011.67.311 2.991 2.991 0 011.712 1.712 5.08 5.08 0 01.311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
    </svg>
  )
}

export function Arrow({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" className={`${className}`}>
      <line x1="0" y1="50" x2="350" y2="50" stroke="#000" stroke-width="8" />
      <polyline points="250 0, 350 50, 250 100" fill="none" stroke="#000" stroke-width="8" stroke="black" />
    </svg>
  )
}
