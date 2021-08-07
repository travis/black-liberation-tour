// @ts-check
import { MuralStop } from '../../components/MuralStop'
import { muralStops } from '../../lib/data'

export default function () {
  return <MuralStop {...muralStops.find(s => s.slug == '/murals/loyal-to-my-soil')} />
}
