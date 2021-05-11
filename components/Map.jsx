import dynamic from 'next/dynamic'

const NoSSRMap = dynamic(
  () => import('./ClientSideMap'),
  { ssr: false }
)

export default NoSSRMap


