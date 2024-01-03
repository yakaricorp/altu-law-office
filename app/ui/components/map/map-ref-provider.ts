import { GoogleMap } from "@react-google-maps/api"
import { RefObject, createContext } from "react"

const mapContext = createContext<RefObject<GoogleMap> | null>(null)
export const MapProvider = mapContext.Provider
export default mapContext
