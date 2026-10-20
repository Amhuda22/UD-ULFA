import { useProducts } from '../features/products/hooks/useProducts.js'
import DashboardSidebar from '../features/dashboard/components/DashboardSidebar.jsx'
import DashboardTopBar from '../features/dashboard/components/DashboardTopBar.jsx'
import ProductHeaderAction from '../features/products/components/ProductHeaderAction.jsx'
import ProductCategoryPills from '../features/products/components/ProductCategoryPills.jsx'
import ProductTable from '../features/products/components/ProductTable.jsx'
import AddProductModal from '../features/products/components/AddProductModal.jsx'
import '../features/products/styles/products.css'
import './DashboardPage.css'

export default function ProductsPage() {
  // Seluruh logic UI dan state dihandle oleh custom hook useProducts sesuai React Coding SOP
  const {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    deleteProduct,
    isAddModalOpen,
    formData,
    imagePreview,
    formErrors,
    handleOpenAddModal,
    handleCloseAddModal,
    handleFormChange,
    handleImageSelect,
    handleSubmitAddProduct,
  } = useProducts()

  return (
    <div className={`dash-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Chassis Frame Shell */}
      <div className={`tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-speaker" aria-hidden="true" />

        {/* Layar Tablet */}
        <div className="dash-screen">
          {/* 1. Komponen Sidebar Navigasi Kiri (Dipertahankan identik) */}
          <DashboardSidebar
            activeMenu={activeMenu}
            onSelectMenu={handleSelectMenu}
            onLogout={handleLogout}
          />

          {/* 2. Area Konten Utama Kanan */}
          <section className="dash-main">
            {/* Top Bar (Slogan & Tanggal Dinamis Hari Ini) */}
            <DashboardTopBar
              slogan="“Akan melayani dengan sepenuh hati”"
            />

            {/* Konten Halaman Produk */}
            <div className="dash-content-body product-content-body">
              {/* Header Judul, Pencarian, & Tombol Tambah */}
              <ProductHeaderAction
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onAddClick={handleOpenAddModal}
              />

              {/* Filter Kategori (Semua, ATK, Perlengkapan Kematian, Perlengkapan Sekolah) */}
              <ProductCategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              {/* Tabel Daftar Produk */}
              <ProductTable
                products={products}
                onDelete={deleteProduct}
              />
            </div>
          </section>

          {/* 3. Modal Tambahkan Produk (Muncul saat tombol tambah diklik) */}
          <AddProductModal
            isOpen={isAddModalOpen}
            onClose={handleCloseAddModal}
            formData={formData}
            imagePreview={imagePreview}
            formErrors={formErrors}
            onChange={handleFormChange}
            onImageSelect={handleImageSelect}
            onSubmit={handleSubmitAddProduct}
          />
        </div>
      </div>

      {/* Floating View Switcher Toggle */}
      <div className="view-toggle-bar">
        <button
          type="button"
          className={`toggle-btn ${viewMode === 'tablet' ? 'active' : ''}`}
          onClick={() => setViewMode('tablet')}
          title="Tampilan Mockup Tablet"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
          </svg>
          <span>Mockup Tablet</span>
        </button>
        <button
          type="button"
          className={`toggle-btn ${viewMode === 'fullscreen' ? 'active' : ''}`}
          onClick={() => setViewMode('fullscreen')}
          title="Tampilan Layar Penuh"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          <span>Layar Penuh</span>
        </button>
      </div>
    </div>
  )
}
