import React, { RefObject, useContext, useEffect } from "react"
import { createPortal } from "react-dom"
import mapContext from "@/ui/components/map/map-ref-provider"
import { GoogleMap } from "@react-google-maps/api"
import MapSvg from "@/ui/icons/map.svg"
import ExternalLinkSvg from "@/ui/icons/external-link.svg"

export default function AddressControl(
  {
    position = window.google.maps.ControlPosition.TOP_LEFT,
  }: {
    position?: number,
  },
) {

  const mapRef: RefObject<GoogleMap> | null = useContext(mapContext)
  const controlDiv = document.createElement('div')

  useEffect(() => {
    const controls = mapRef?.current?.state?.map?.controls[position]
    if (controls) {
      const index = controls.getLength()
      controls.push(controlDiv)
      return () => {
        controls.removeAt(index)
      }
    }
  })

  return createPortal((
    <div className="bg-white flex p-3 m-2 shadow-md text-[0.9rem]">
      <div className="max-w-[260px]">
        <p><strong>ALTU Hukuk Burosu</strong></p>
        <p>İsmet Kaptan Mh. 1367 Sk. No:2 Kat:7 Daire:704 İkbal 2 İş Merkezi</p>
        <p>Konak/İzmir</p>
      </div>
      <div className="text-[#619DE5] text-center self-center cursor-pointer hover:underline">
        <ExternalLinkSvg width={22} height={22} className="inline mb-1"></ExternalLinkSvg>
        <div>Directions</div>
      </div>
    </div>
  ), controlDiv)
}
