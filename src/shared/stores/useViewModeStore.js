import { create } from 'zustand'

const STORAGE_KEY = 'ud_ulfa_view_mode'

const getInitialViewMode = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'fullscreen' || saved === 'tablet') {
      return saved
    }
    return 'tablet'
  } catch {
    return 'tablet'
  }
}

export const useViewModeStore = create((set) => ({
  viewMode: getInitialViewMode(),
  setViewMode: (mode) => {
    try {
      localStorage.setItem(STORAGE_KEY, mode)
    } catch (e) {
      console.error('Error saving view mode to storage', e)
    }
    set({ viewMode: mode })
  },
}))
