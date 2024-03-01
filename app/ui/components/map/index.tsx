'use client'

import { useRef } from "react"
import {
  GoogleMap,
  OverlayViewF,
  OVERLAY_MOUSE_TARGET,
  useJsApiLoader
} from "@react-google-maps/api"
import { MapProvider } from "@/ui/components/map/map-ref-provider"
import AddressControl from "@/ui/components/map/address-control"
import { font_playfair } from "@/ui/fonts"
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

  function onLoadedMap() {
    console.log('onLoadedMap')
  }

  function onUnmountMap() {
    console.log('onUnmountMap')
  }

  function onLoadedOverlay() {
    console.log('onLoadedOverlay')
  }

  function onUnmountOverlay() {
    console.log('onUnmountOverlay')
  }

  return isLoaded ? (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={{
        width: '100%',
        height: '400px'
      }}
      center={{
        lat: 38.47909,
        lng: 27.19439
      }}
      zoom={18}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      onLoad={onLoadedMap}
      onUnmount={onUnmountMap}
    >
      <OverlayViewF
        position={{
          lat: 38.47909,
          lng: 27.19439
        }}
        mapPaneName={OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={centerOverlayView}
        onLoad={onLoadedOverlay}
        onUnmount={onUnmountOverlay}
      >
        <div className={classNames([
          font_playfair.className,
          'scale-50 shadow-xl shadow-neutral-800 bg-secondary text-center p-2'
        ])}>
          <h1 className="text-primary text-4xl tracking-wider mb-1">ALTU</h1>
          <h1 className="text-textPrimary text-sm tracking-[0.3rem]">HUKUK BUROSU</h1>
        </div>
      </OverlayViewF>
      <MapProvider value={mapRef}>
        <AddressControl></AddressControl>
      </MapProvider>
    </GoogleMap>
  ) : (
    <></>
  )
}
