// This is not in use. I solved the issue with css only
// however better to keep this as an example of the best way to use
// the context api (design)

import { createContext, useContext, useState } from "react"
import type { Dispatch, SetStateAction, ReactNode } from "react"

const SidebarContext = createContext<SidebarContextType | null>(null)

export type SidebarContextType = {
  isMobileSidebarVisible: boolean;
  setMobileSidebarVisible: Dispatch<SetStateAction<boolean>>;
}
export type SidebarContextState = Omit<SidebarContextType, 'setMobileSidebarVisible'>

type Props = {
  onStateChanged: (state: SidebarContextState) => void;
  children: ReactNode;
}

export default function SidebarContextProvider({ onStateChanged, children }: Props) {
  const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false)

  onStateChanged({
    isMobileSidebarVisible
  })

  return (
    <SidebarContext.Provider value={{
      isMobileSidebarVisible,
      setMobileSidebarVisible
    }}>
      { children }
    </SidebarContext.Provider>
  )
}

export function useSidebarContext() {
  const sidebarContext = useContext(SidebarContext)
  if (!sidebarContext) {
    throw new Error('Component needs to be wrapped by SidebarContext.Provider')
  }

  return sidebarContext;
}
