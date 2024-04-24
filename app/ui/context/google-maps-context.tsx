import type { ReactNode, RefObject } from "react";
import type { GoogleMap } from "@react-google-maps/api"
import { createContext, useContext } from "react"

const MapContext = createContext<RefObject<GoogleMap> | null>(null)

type Props = {
  mapRef: RefObject<GoogleMap>;
  children: ReactNode;
}
export default function GoogleMapsContextProvider({
  mapRef,
  children,
}: Props) {
  return (
    <MapContext.Provider value={mapRef}>
      { children }
    </MapContext.Provider>
  )
}

export function useGoogleMapsContext(): RefObject<GoogleMap> {
  const googleMapsContext = useContext(MapContext)
  if (!googleMapsContext) {
    throw new Error('Component needs to be wrapped by GoogleMapsContext.Provider')
  }

  return googleMapsContext
}