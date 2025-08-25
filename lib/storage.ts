export const storage = {
  getToken(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem("auth_token")
  },

  setToken(token: string): void {
    if (typeof window === "undefined") return
    localStorage.setItem("auth_token", token)
  },

  getUser(): any | null {
    if (typeof window === "undefined") return null
    const userData = localStorage.getItem("user_data")
    return userData ? JSON.parse(userData) : null
  },

  setUser(user: any): void {
    if (typeof window === "undefined") return
    localStorage.setItem("user_data", JSON.stringify(user))
  },

  clearAuthData(): void {
    if (typeof window === "undefined") return
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user_data")
  },
}
