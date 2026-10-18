import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'ud_ulfa_auth_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch (e) {
      console.error('Error saving auth to localStorage', e)
    }
  }, [user])

  const login = (username, password) => {
    // Validasi dasar, bisa diintegrasikan dengan backend/API nantinya
    if (username.trim() && password.trim()) {
      const userData = {
        username: username.trim(),
        role: username.toLowerCase() === 'admin' ? 'Administrator' : 'Kasir',
        loginTime: new Date().toISOString(),
      }
      setUser(userData)
      return { success: true, user: userData }
    }
    return { success: false, message: 'Username dan password wajib diisi.' }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
