import { getCookie, setCookie } from 'cookies-next'
import { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(JSON.parse(getCookie('user')))
  }, [])

  const authUser = data => {
    setUser(data)
  }

  return (
    <GlobalContext.Provider value={{ user, setUser, authUser }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}
