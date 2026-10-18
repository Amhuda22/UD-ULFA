import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useStockStore, productOptions } from '../stores/useStockStore.js'

export function useStock() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const [viewMode, setViewMode] = useState('tablet')
  const [activeMenu, setActiveMenu] = useState('stok')
  const [successToast, setSuccessToast] = useState(null)

  // Store state
  const history = useStockStore((state) => state.history)
  const activeTab = useStockStore((state) => state.activeTab)
  const form = useStockStore((state) => state.form)

  // Store actions
  const setActiveTab = useStockStore((state) => state.setActiveTab)
  const updateFormField = useStockStore((state) => state.updateFormField)
  const addStockEntry = useStockStore((state) => state.addStockEntry)

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

  const handleFormChange = (field, value) => {
    updateFormField(field, value)
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault()

    if (!form.product || form.product === 'Pilih Produk') {
      alert('Silakan pilih produk terlebih dahulu.')
      return
    }

    const qty = parseInt(form.quantity, 10)
    if (isNaN(qty) || qty <= 0) {
      alert('Jumlah stok harus lebih dari 0.')
      return
    }

    addStockEntry({
      date: form.date || '01-10-2026',
      product: form.product,
      type: activeTab,
      quantity: qty,
      notes: form.notes,
    })

    setSuccessToast(`Stok ${activeTab.toLowerCase()} untuk ${form.product} berhasil disimpan!`)
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
    history,
    activeTab,
    setActiveTab,
    form,
    handleFormChange,
    handleSubmit,
    productOptions,
    successToast,
  }
}
