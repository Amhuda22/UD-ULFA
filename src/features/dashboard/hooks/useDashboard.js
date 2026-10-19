import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useViewModeStore } from '../../../shared/stores/useViewModeStore.js'

export function useDashboard() {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const viewMode = useViewModeStore((state) => state.viewMode)
  const setViewMode = useViewModeStore((state) => state.setViewMode)
  const [activeMenu, setActiveMenu] = useState('dashboard')

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const handleSelectMenu = (menuKey) => {
    setActiveMenu(menuKey)
    if (menuKey === 'produk') {
      navigate('/produk')
    } else if (menuKey === 'dashboard') {
      navigate('/dashboard')
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

  // Data titik grafik penjualan (seluruhnya 0 / kosong)
  const chartPoints = [
    { day: 'Sen', val: 0, x: 28, y: 148 },
    { day: 'Sel', val: 0, x: 62, y: 148 },
    { day: 'Rab', val: 0, x: 96, y: 148 },
    { day: 'Kam', val: 0, x: 130, y: 148 },
    { day: 'Jum', val: 0, x: 164, y: 148 },
    { day: 'Sab', val: 0, x: 198, y: 148 },
    { day: 'Min', val: 0, x: 232, y: 148 },
  ]

  const polylinePoints = chartPoints.map((p) => `${p.x},${p.y}`).join(' ')

  return {
    viewMode,
    setViewMode,
    activeMenu,
    setActiveMenu,
    handleSelectMenu,
    user,
    handleLogout,
    chartPoints,
    polylinePoints,
  }
}
