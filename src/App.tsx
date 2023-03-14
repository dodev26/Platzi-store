import React, { useEffect } from 'react'

import Routes from './Routes'
import { useMutation, useQuery } from 'react-query'
import authApi from './apis/auth.api'
import { toast } from 'react-toastify'
import { useAppContext } from './contexts/app.context'
import { setProfileToLS } from './utils/lsapi'

function App() {
  const { isAuthenticated, setProfile, profile } = useAppContext()
  const { data } = useQuery({
    queryKey: ['profileAuth'],
    queryFn: authApi.profileAuth
  })
  const dataProfile = data?.data
  useEffect(() => {
    if (dataProfile) {
      setProfile(dataProfile)
      setProfileToLS(dataProfile)
    }
  }, [dataProfile, setProfile])
  console.log({
    isAuthenticated,
    profile
  })
  return <Routes />
}

export default App
