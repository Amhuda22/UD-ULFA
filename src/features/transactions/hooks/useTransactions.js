import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useTransactionStore } from '../stores/useTransactionStore.js'

export function useTransactions() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const [viewMode, setViewMode] = useState('tablet')
  const [activeMenu, setActiveMenu] = useState('transaksi')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  // Store data
  const cartItems = useTransactionStore((state) => state.cartItems)
  const customer = useTransactionStore((state) => state.customer)
  const paymentMethod = useTransactionStore((state) => state.paymentMethod)
  const searchQuery = useTransactionStore((state) => state.searchQuery)

  // Store actions
  const setSearchQuery = useTransactionStore((state) => state.setSearchQuery)
  const setCustomer = useTransactionStore((state) => state.setCustomer)
  const setPaymentMethod = useTransactionStore((state) => state.setPaymentMethod)
  const removeCartItem = useTransactionStore((state) => state.removeCartItem)
  const updateQuantity = useTransactionStore((state) => state.updateQuantity)
  const addCartItem = useTransactionStore((state) => state.addCartItem)
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

  // Calculate Grand Total
  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.subtotal, 0)
  }, [cartItems])

  const totalDisplay = useMemo(() => {
    return `Rp ${totalAmount.toLocaleString('id-ID')}`
  }, [totalAmount])

  // Filter cart items by search query if any
  const filteredCartItems = useMemo(() => {
    if (!searchQuery.trim()) return cartItems
    return cartItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    )
  }, [cartItems, searchQuery])

  // Handle Checkout / Pay & Print Receipt
  const handleCheckout = () => {
    if (cartItems.length === 0) return
    setIsSuccessModalOpen(true)
  }

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false)
    resetCart()
  }

  return {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    cartItems: filteredCartItems,
    totalAmount,
    totalDisplay,
    customer,
    setCustomer,
    paymentMethod,
    setPaymentMethod,
    searchQuery,
    setSearchQuery,
    removeCartItem,
    updateQuantity,
    addCartItem,
    handleCheckout,
    isSuccessModalOpen,
    handleCloseSuccessModal,
  }
}
