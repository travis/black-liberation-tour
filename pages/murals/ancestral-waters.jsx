// @ts-check
import { MuralStop } from '../../components/MuralStop'
import { muralStops } from '../../lib/data'

export default function AncestralWaters() {
  return <MuralStop {...muralStops.find(s => s.slug == '/murals/ancestral-waters')} />
}
