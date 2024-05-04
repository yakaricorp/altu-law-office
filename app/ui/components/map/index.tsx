'use client'

import { useRef } from "react"
import {
  GoogleMap,
  OverlayViewF,
  OVERLAY_MOUSE_TARGET,
  useJsApiLoader
} from "@react-google-maps/api"
import AddressControl from "@/ui/components/map/address-control"
import GoogleMapsContextProvider from "@/ui/context/google-maps-context"

import { font_playfair, font_mukta } from "@/ui/fonts"
import classNames from "classnames"

export default function Map() {
  const mapRef = useRef<GoogleMap>(null)

  const { isLoaded } = useJsApiLoader({
    id: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID as string,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  function centerOverlayView(width: number, height: number): { x: number, y: number } {
    return {
      x: -(width / 2),
      y: -(height / 2),
    }
  }

  return isLoaded ? (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={{
        width: '100%',
        height: '400px'
      }}
      center={{
        lat: 38.4228558,
        lng: 27.1415766
      }}
      zoom={18}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <OverlayViewF
        position={{
          lat: 38.4228558,
          lng: 27.1415766
        }}
        mapPaneName={OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={centerOverlayView}
      >
        <div className={classNames([
          font_mukta.className,
          'relative rounded-lg bg-secondary text-center p-2 px-4'
        ])}>
          <h1 className={classNames([
            font_playfair.className,
            "text-primary font-bold text-xl tracking-wide mb-1"
          ])}>ALTU</h1>
          <h1 className="text-text-primary text-sm">HUKUK BUROSU</h1>
          <div className="bottom-arrow border-black"></div>
        </div>
      </OverlayViewF>
      <GoogleMapsContextProvider mapRef={mapRef}>
        <AddressControl></AddressControl>
      </GoogleMapsContextProvider>
    </GoogleMap>
  ) : (
    <></>
  )
}
