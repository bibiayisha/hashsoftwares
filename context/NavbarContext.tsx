'use client'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface NavbarTypes {
  color: string
  setcolor: Dispatch<SetStateAction<string>>
}

const NavbarContext = createContext<NavbarTypes>({
  color: '',
  setcolor: (): string => '',
})

export const NavbarContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [color, setcolor] = useState('#202020')
  return (
    <NavbarContext.Provider value={{ color, setcolor }}>
      {children}
    </NavbarContext.Provider>
  )
}
export const useNavbarContext = () => useContext(NavbarContext)
