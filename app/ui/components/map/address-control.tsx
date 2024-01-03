import React, { RefObject, useContext, useEffect } from "react"
import { createPortal } from "react-dom"
import mapContext from "@/ui/components/map/map-ref-provider"
import { GoogleMap } from "@react-google-maps/api"

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
    <div className="bg-white p-3 m-2 shadow-md text-xs">
      <div>ALTU Hukuk Burosu</div>
      <div>Goztepe Mh. Bademozu Sk. No 17/5</div>
      <div>Odunpazari/IZMIR</div>
    </div>
  ), controlDiv)
}
