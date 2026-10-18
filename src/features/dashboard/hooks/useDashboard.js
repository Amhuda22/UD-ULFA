import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'

export function useDashboard() {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const [viewMode, setViewMode] = useState('fullscreen')
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

  // Data titik grafik penjualan (Sen s/d Min)
  const chartPoints = [
    { day: 'Sen', val: 0, x: 28, y: 140 },
    { day: 'Sel', val: 5, x: 62, y: 120 },
    { day: 'Rab', val: 10, x: 96, y: 100 },
    { day: 'Kam', val: 5, x: 130, y: 120 },
    { day: 'Jum', val: 15, x: 164, y: 80 },
    { day: 'Sab', val: 12, x: 198, y: 92 },
    { day: 'Min', val: 25, x: 232, y: 40 },
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
