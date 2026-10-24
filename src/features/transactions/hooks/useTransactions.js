import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useProductStore } from '../../products/stores/useProductStore.js'
import { useTransactionStore } from '../stores/useTransactionStore.js'
import { useViewModeStore } from '../../../shared/stores/useViewModeStore.js'

export function useTransactions() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const viewMode = useViewModeStore((state) => state.viewMode)
  const setViewMode = useViewModeStore((state) => state.setViewMode)
  const [activeMenu, setActiveMenu] = useState('transaksi')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  // Store data: Mengambil data katalog produk langsung dari master Daftar Produk (useProductStore)
  const catalogProducts = useProductStore((state) => state.products)
  const cartItems = useTransactionStore((state) => state.cartItems)
  const customer = useTransactionStore((state) => state.customer)
  const paymentMethod = useTransactionStore((state) => state.paymentMethod)
  const searchQuery = useTransactionStore((state) => state.searchQuery)
  const paidAmount = useTransactionStore((state) => state.paidAmount)

  // Store actions
  const setSearchQuery = useTransactionStore((state) => state.setSearchQuery)
  const setCustomer = useTransactionStore((state) => state.setCustomer)
  const setPaymentMethod = useTransactionStore((state) => state.setPaymentMethod)
  const setPaidAmount = useTransactionStore((state) => state.setPaidAmount)
  const removeCartItem = useTransactionStore((state) => state.removeCartItem)
  const updateQuantity = useTransactionStore((state) => state.updateQuantity)
  const incrementQuantity = useTransactionStore((state) => state.incrementQuantity)
  const decrementQuantity = useTransactionStore((state) => state.decrementQuantity)
  const addCartItem = useTransactionStore((state) => state.addCartItem)
  const cancelTransaction = useTransactionStore((state) => state.cancelTransaction)
  const resetCart = useTransactionStore((state) => state.resetCart)

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

  // Grand Total calculation
  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.subtotal, 0)
  }, [cartItems])

  const totalDisplay = useMemo(() => {
    return `Rp ${totalAmount.toLocaleString('id-ID')}`
  }, [totalAmount])

  // Change / Kembalian calculation
  const changeAmount = useMemo(() => {
    const paid = Number(paidAmount) || 0
    return Math.max(0, paid - totalAmount)
  }, [paidAmount, totalAmount])

  const changeDisplay = useMemo(() => {
    return `[${changeAmount.toLocaleString('id-ID')}]`
  }, [changeAmount])

  // Paid amount formatted string for input value
  const paidAmountFormatted = useMemo(() => {
    if (paidAmount === 0 || paidAmount === null || paidAmount === undefined) return ''
    return paidAmount.toLocaleString('id-ID')
  }, [paidAmount])

  // Handle paid amount input with auto dots formatting
  const handlePaidAmountChange = (rawVal) => {
    const numericStr = rawVal.replace(/\D/g, '')
    const val = numericStr ? parseInt(numericStr, 10) : 0
    setPaidAmount(val)
  }

  // Filter catalog products by search query
  const filteredCatalogProducts = useMemo(() => {
    if (!searchQuery.trim()) return catalogProducts
    return catalogProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    )
  }, [catalogProducts, searchQuery])

  // Handle Checkout / Bayar & Cetak Struk
  const handleCheckout = () => {
    if (cartItems.length === 0) return
    setIsSuccessModalOpen(true)
  }

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false)
    resetCart()
  }

  const handleCancel = () => {
    cancelTransaction()
  }

  return {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    catalogProducts: filteredCatalogProducts,
    cartItems,
    totalAmount,
    totalDisplay,
    customer,
    setCustomer,
    paymentMethod,
    setPaymentMethod,
    searchQuery,
    setSearchQuery,
    paidAmount,
    paidAmountFormatted,
    handlePaidAmountChange,
    changeAmount,
    changeDisplay,
    removeCartItem,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    addCartItem,
    handleCheckout,
    handleCancel,
    isSuccessModalOpen,
    handleCloseSuccessModal,
  }
}
