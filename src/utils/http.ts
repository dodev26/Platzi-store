import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { configs } from 'src/constants/configs'
import { setAccessTokenToLS } from './lsapi'

class Http {
  instance: AxiosInstance
  private access_token: string | undefined
  constructor() {
    this.instance = axios.create({
      baseURL: configs.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use((config) => {
      if (this.access_token && config.headers) {
        config.headers.authorization = `Bearer ${this.access_token}`
      }
      return config
    }),
      this.instance.interceptors.response.use((response) => {
        const { url } = response.config
        if (url === 'auth/login') {
          this.access_token = response.data?.access_token
          setAccessTokenToLS(this.access_token as string)
        }
        return response
      })
  }
}
const http = new Http().instance

export default http
