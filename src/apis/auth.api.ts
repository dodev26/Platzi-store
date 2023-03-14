import { AuthLogin } from 'src/types/auth.type'
import { User } from 'src/types/user.type'
import http from 'src/utils/http'

const authApi = {
  login: (body: AuthLogin) => http.post<{ access_token: string; refresh_token: string }>('auth/login', body),
  profileAuth: () => http.get<User>('auth/profile')
}

export default authApi
