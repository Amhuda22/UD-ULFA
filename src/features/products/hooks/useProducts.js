import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import { useProductStore } from '../stores/useProductStore.js'
import { useViewModeStore } from '../../../shared/stores/useViewModeStore.js'
import { addProductSchema } from '../validation/productSchema.js'

const initialFormState = {
  name: '',
  category: 'Pilih Kategori',
  price: '',
  stock: '0',
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

  // Add Product Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
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
    setFormData(initialFormState)
    setImagePreview(null)
    setFormErrors({})
    setIsAddModalOpen(true)
  }

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false)
    setFormErrors({})
  }

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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
    const formattedPrice = `Rp ${rawPrice.toLocaleString('id-ID')}`
    const rawStock = Number(formData.stock) || 0

    // Add to store
    addProduct({
      name: formData.name.trim(),
      category: formData.category,
      price: rawPrice,
      priceDisplay: formattedPrice,
      stock: rawStock,
      description: formData.description.trim(),
      image: imagePreview || '/products/buku-tulis.png',
    })

    // Reset and close
    handleCloseAddModal()
  }

  // Filter products based on search and selected category
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

      return matchCategory && matchSearch
    })
  }, [products, selectedCategory, searchQuery])

  const categories = ['Semua', 'ATK', 'Perlengkapan Kematian', 'Perlengkapan Sekolah', 'Lainnya']

  return {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    products: filteredProducts,
    totalCount: products.length,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    deleteProduct,

    // Modal state & actions
    isAddModalOpen,
    formData,
    imagePreview,
    formErrors,
    handleOpenAddModal,
    handleCloseAddModal,
    handleFormChange,
    handleImageSelect,
    handleSubmitAddProduct,
  }
}
