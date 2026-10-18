import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useSettingsStore } from '../stores/useSettingsStore.js'

export function useSettings() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const [viewMode, setViewMode] = useState('tablet')
  const [activeMenu, setActiveMenu] = useState('pengaturan')
  const [successToast, setSuccessToast] = useState(null)

  // Store state
  const form = useSettingsStore((state) => state.form)
  const updateFormField = useSettingsStore((state) => state.updateFormField)
  const updateLogo = useSettingsStore((state) => state.updateLogo)
  const saveSettings = useSettingsStore((state) => state.saveSettings)

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const handleSelectMenu = (menuKey) => {
    setActiveMenu(menuKey)
    if (menuKey === 'dashboard') {
      navigate('/dashboard')
    } else if (menuKey === 'produk') {
      navigate('/produk')
    } else if (menuKey === 'transaksi') {
      navigate('/transaksi')
    } else if (menuKey === 'stok') {
      navigate('/stok')
    } else if (menuKey === 'keuangan') {
      navigate('/keuangan')
    } else if (menuKey === 'pengaturan') {
      navigate('/pengaturan')
    }
  }

  const handleFieldChange = (field, value) => {
    updateFormField(field, value)
  }

  const handleLogoSelect = (file) => {
    if (!file) return
    const previewUrl = URL.createObjectURL(file)
    updateLogo(previewUrl)
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault()

    saveSettings()
    setSuccessToast('Pengaturan sistem berhasil disimpan!')
    setTimeout(() => {
      setSuccessToast(null)
    }, 3000)
  }

  return {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    form,
    handleFieldChange,
    handleLogoSelect,
    handleSubmit,
    successToast,
  }
}
