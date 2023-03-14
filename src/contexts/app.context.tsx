import React, { useState, createContext } from 'react'
import { User } from 'src/types/user.type'
import { getAccessTokenFromLS, getProfileFromLS } from 'src/utils/lsapi'

interface IAppContext {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  reset: () => void
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}
const initialState: IAppContext = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  reset: () => null
}
const AppContext = createContext<IAppContext>(initialState)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialState.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialState.profile)
  const reset = () => {
    setIsAuthenticated(false)
    setProfile(null)
  }

  const control = {
    isAuthenticated,
    setIsAuthenticated,
    profile,
    setProfile,
    reset
  }
  return <AppContext.Provider value={control}>{children}</AppContext.Provider>
}

const useAppContext = () => {
  const context = React.useContext(AppContext)
  if (typeof context === undefined || context === undefined || context === null) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}
export { AppContext, AppProvider, useAppContext }
