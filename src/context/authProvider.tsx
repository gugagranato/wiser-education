import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect
} from 'react'

import api from '../services/api'

interface SignInCredentials {
  email: string
  password: string
}

interface AuthState {
  token: string
}
interface User {
  email: string
  password: string
}

interface AuthContextData {
  token: string
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>()

  useEffect(() => {
    const token = localStorage.getItem('@Wiser:token')

    if (token) {
      setData({ token })
    }
  }, [data, setData])
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password
    })
    console.log('response', response.data)
    const { token } = response.data

    localStorage.setItem('@Wiser:token', token)

    api.defaults.headers.authorization = `Bearer ${token}`

    setData(token)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Wiser:token')

    setData({} as AuthState)
    window.location.reload()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        token: data?.token,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

export default AuthProvider
