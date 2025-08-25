export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  createdAt: Date
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface SignupData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface LoginData {
  email: string
  password: string
}

export interface AuthContextType extends AuthState {
  signup: (data: SignupData) => Promise<void>
  login: (data: LoginData) => Promise<void>
  logout: () => void
  clearError: () => void
}
