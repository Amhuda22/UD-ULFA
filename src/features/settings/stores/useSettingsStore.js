import { create } from 'zustand'

export const initialSettings = {
  storeName: 'UD ULFA',
  address: 'Gayam,Gayam,Bojonegoro',
  whatsapp: '088930577296',
  logoUrl: '/store-logo.png',
}

export const useSettingsStore = create((set) => ({
  settings: initialSettings,
  form: { ...initialSettings },

  updateFormField: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),

  updateLogo: (url) =>
    set((state) => ({
      form: {
        ...state.form,
        logoUrl: url,
      },
    })),

  saveSettings: () =>
    set((state) => ({
      settings: { ...state.form },
    })),

  resetForm: () =>
    set((state) => ({
      form: { ...state.settings },
    })),
}))
