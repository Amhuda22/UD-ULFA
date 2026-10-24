import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useProductStore } from '../stores/useProductStore.js'
import { useViewModeStore } from '../../../shared/stores/useViewModeStore.js'
import { addProductSchema } from '../validation/productSchema.js'
import { formatProductPrice } from '../../../shared/utils/currencyUtils.js'

const initialFormState = {
  name: '',
  category: 'Pilih Kategori',
  price: '',
  stock: '',
  description: '',
  image: '',
}

export function useProducts() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const viewMode = useViewModeStore((state) => state.viewMode)
  const setViewMode = useViewModeStore((state) => state.setViewMode)
  const [activeMenu, setActiveMenu] = useState('produk')

  // Product Store state
  const products = useProductStore((state) => state.products)
  const searchQuery = useProductStore((state) => state.searchQuery)
  const selectedCategory = useProductStore((state) => state.selectedCategory)
  const setSearchQuery = useProductStore((state) => state.setSearchQuery)
  const setSelectedCategory = useProductStore((state) => state.setSelectedCategory)
  const deleteProduct = useProductStore((state) => state.deleteProduct)
  const addProduct = useProductStore((state) => state.addProduct)
  const updateProduct = useProductStore((state) => state.updateProduct)

  // Add/Edit Product Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingProductId, setEditingProductId] = useState(null)
  const [formData, setFormData] = useState(initialFormState)
  const [imagePreview, setImagePreview] = useState(null)
  const [formErrors, setFormErrors] = useState({})

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

  // Modal handlers
  const handleOpenAddModal = () => {
    setEditingProductId(null)
    setFormData(initialFormState)
    setImagePreview(null)
    setFormErrors({})
    setIsAddModalOpen(true)
  }

  const handleOpenEditModal = (product) => {
    setEditingProductId(product.id)
    const rawPrice = product.price ? String(product.price).replace(/\D/g, '') : ''
    const formattedPrice = rawPrice ? Number(rawPrice).toLocaleString('id-ID') : ''
    setFormData({
      name: product.name || '',
      category: product.category || 'Pilih Kategori',
      price: formattedPrice,
      stock: product.stock !== undefined && product.stock !== null ? String(product.stock) : '',
      description: product.description || '',
      image: product.image || '',
    })
    setImagePreview(product.image || null)
    setFormErrors({})
    setIsAddModalOpen(true)
  }

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false)
    setEditingProductId(null)
    setFormErrors({})
  }

  const handleFormChange = (field, value) => {
    let finalValue = value

    if (field === 'price') {
      const digitsOnly = value.replace(/\D/g, '')
      if (!digitsOnly) {
        finalValue = ''
      } else {
        const cleanDigits = digitsOnly.replace(/^0+(?!$)/, '') || '0'
        finalValue = cleanDigits.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    }

    setFormData((prev) => ({
      ...prev,
      [field]: finalValue,
    }))
    // Clear error for this field when user edits
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleImageSelect = (file) => {
    if (!file) return
    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)
    setFormData((prev) => ({
      ...prev,
      image: previewUrl,
    }))
  }

  const handleSubmitAddProduct = (e) => {
    if (e && e.preventDefault) e.preventDefault()

    // Validate using Zod schema according to React Coding SOP
    const result = addProductSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors = {}
      for (const issue of result.error.issues) {
        const fieldName = issue.path[0]
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message
        }
      }
      setFormErrors(fieldErrors)
      return
    }

    // Clean numeric price
    const rawPrice = Number(formData.price.replace(/\D/g, '')) || 0
    const formattedPrice = formatProductPrice(rawPrice)
    const rawStock = Number(formData.stock) || 0

    // Add or Update store
    if (editingProductId) {
      updateProduct({
        id: editingProductId,
        name: formData.name.trim(),
        category: formData.category,
        price: rawPrice,
        priceDisplay: formattedPrice,
        stock: rawStock,
        description: formData.description?.trim() || '',
        image: imagePreview || '',
      })
    } else {
      addProduct({
        name: formData.name.trim(),
        category: formData.category,
        price: rawPrice,
        priceDisplay: formattedPrice,
        stock: rawStock,
        description: formData.description?.trim() || '',
        image: imagePreview || '',
      })
    }

    // Reset and close
    handleCloseAddModal()
  }

  // Status filter state ('all' | 'tersedia' | 'menipis' | 'habis')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const handleSelectStatus = (statusKey) => {
    setSelectedStatus((prev) => (prev === statusKey ? 'all' : statusKey))
  }

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    if (category === 'Semua') {
      setSelectedStatus('all')
      setSearchQuery('')
    }
  }

  // Filter products based on search, selected category, and status card filter
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      let matchCategory = true
      if (selectedCategory !== 'Semua') {
        matchCategory = p.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
      }

      let matchSearch = true
      if (searchQuery.trim() !== '') {
        matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      }

      let matchStatus = true
      if (selectedStatus === 'tersedia') {
        matchStatus = p.stock > 20
      } else if (selectedStatus === 'menipis') {
        matchStatus = p.stock > 0 && p.stock <= 20
      } else if (selectedStatus === 'habis') {
        matchStatus = p.stock <= 0
      }

      return matchCategory && matchSearch && matchStatus
    })
  }, [products, selectedCategory, searchQuery, selectedStatus])

  const lowStockCount = useMemo(
    () => products.filter((p) => p.stock > 0 && p.stock <= 20).length,
    [products]
  )
  const outOfStockCount = useMemo(
    () => products.filter((p) => p.stock <= 0).length,
    [products]
  )

  const categories = ['Semua', 'ATK', 'Perlengkapan Kematian', 'Perlengkapan Sekolah', 'Lainnya']

  return {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    products: filteredProducts,
    totalCount: products.length,
    lowStockCount,
    outOfStockCount,
    selectedStatus,
    handleSelectStatus,
    setSelectedStatus,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory: handleSelectCategory,
    categories,
    deleteProduct,

    // Modal state & actions
    isAddModalOpen,
    isEditMode: Boolean(editingProductId),
    formData,
    imagePreview,
    formErrors,
    handleOpenAddModal,
    handleOpenEditModal,
    handleCloseAddModal,
    handleFormChange,
    handleImageSelect,
    handleSubmitAddProduct,
  }
}
