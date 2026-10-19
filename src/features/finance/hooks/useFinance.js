import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useFinanceStore, financeKpiData } from '../stores/useFinanceStore.js'
import { useViewModeStore } from '../../../shared/stores/useViewModeStore.js'

export function useFinance() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const viewMode = useViewModeStore((state) => state.viewMode)
  const setViewMode = useViewModeStore((state) => state.setViewMode)
  const [activeMenu, setActiveMenu] = useState('keuangan')

  // Store state
  const periodTab = useFinanceStore((state) => state.periodTab)
  const selectedPeriod = useFinanceStore((state) => state.selectedPeriod)
  const transactions = useFinanceStore((state) => state.transactions)

  // Store actions
  const setPeriodTab = useFinanceStore((state) => state.setPeriodTab)
  const setSelectedPeriod = useFinanceStore((state) => state.setSelectedPeriod)

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

  const currentKpi = useMemo(() => {
    return financeKpiData[periodTab] || financeKpiData.Mingguan
  }, [periodTab])

  return {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    periodTab,
    setPeriodTab,
    selectedPeriod,
    setSelectedPeriod,
    currentKpi,
    transactions,
  }
}
