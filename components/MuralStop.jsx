// @ts-check
import { muralStops } from '../lib/data'

import {
  TourStop,
  TourStopLeft,
  TourStopLogo,
  TourStopMiddle,
  TourStopHeader,
  TourStopRight,
  TourStopPhoto,
  TourNext,
  MuralStopLeft,
  MuralStopRight,
  MuralInfo,
  TourParagraph,
} from '../components/tour'

/** @param {import('../lib/data').MuralStop} props */
export function MuralStop(props) {
  const nextStop = muralStops.find(s => s.from == props.slug)

  return (
    <TourStop>
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <TourStopLeft className="bg-white">
        <TourStopLogo
          title={
            <>
              Black Liberation <br /> Mural Tour
            </>
          }
        />
      </TourStopLeft>

      <TourStopMiddle>
        <TourStopHeader
          href="/murals"
          name={props.name}
          location={props.address}
          from={muralStops.find(s => s.slug == props.from)}
          to={props}
        />
      </TourStopMiddle>

      <TourStopRight />

      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <MuralStopLeft>
        <TourStopPhoto src={props.img} />
      </MuralStopLeft>
      <MuralStopRight>
        <MuralInfo {...props}></MuralInfo>
      </MuralStopRight>

      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {props.supplement && (
        <>
          <TourStopLeft className="bg-white" />
          <TourStopMiddle>
            {props.supplement.map(p => (
              <TourParagraph dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </TourStopMiddle>
          <div></div>
        </>
      )}

      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {nextStop && (
        <>
          <TourStopLeft className="bg-white" />
          <TourNext href={nextStop.slug}>{nextStop.name}</TourNext>
          <div></div>
        </>
      )}
    </TourStop>
  )
}
