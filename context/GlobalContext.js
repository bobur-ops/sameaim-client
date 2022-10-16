import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { createClubApi, getClubsApi } from '../api/client'
import { uniqueId } from '../utils/uniqueId'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const cookieUser = getCookie('user')
    if (cookieUser) {
      setUser(JSON.parse(cookieUser))
    }
  }, [])

  const authUser = data => {
    setUser(data)
  }

  const createClub = async clubData => {
    try {
      toast('Processing...')
      const data = {
        ...clubData,
        author: JSON.stringify(user),
        clubId: uniqueId()
      }

      const response = await createClubApi(data)
      console.log(response)
      toast.success(
        `Club ${response.data.newClub.clubName} was created successfully`
      )
      setUser(response.data.newUser)
      deleteCookie('user')
      setCookie('user', JSON.stringify(response.data.newUser))
      history.go(-1)
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
  }

  return (
    <GlobalContext.Provider value={{ user, setUser, authUser, createClub }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}
