import { create } from 'zustand'

const STORAGE_KEY = 'ud_ulfa_auth_user'

const getInitialUser = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : { username: 'Owner', role: 'Owner' }
  } catch {
    return { username: 'Owner', role: 'Owner' }
  }
}

export const useAuthStore = create((set) => ({
  user: getInitialUser(),
  isAuthenticated: true,

  setUser: (userData) => {
    try {
      if (userData) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch (e) {
      console.error('Error saving auth to storage', e)
    }
    set({ user: userData, isAuthenticated: !!userData })
  },

  isLogoutModalOpen: false,
  openLogoutModal: () => set({ isLogoutModalOpen: true }),
  closeLogoutModal: () => set({ isLogoutModalOpen: false }),

  logout: () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      console.error('Error removing auth from storage', e)
    }
    set({ user: null, isAuthenticated: false, isLogoutModalOpen: false })
  },
}))
