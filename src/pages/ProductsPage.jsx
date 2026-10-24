import { useProducts } from '../features/products/hooks/useProducts.js'
import DashboardSidebar from '../features/dashboard/components/DashboardSidebar.jsx'
import DashboardTopBar from '../features/dashboard/components/DashboardTopBar.jsx'
import ProductSummaryCards from '../features/products/components/ProductSummaryCards.jsx'
import ProductHeaderAction from '../features/products/components/ProductHeaderAction.jsx'
import ProductCategoryPills from '../features/products/components/ProductCategoryPills.jsx'
import ProductTable from '../features/products/components/ProductTable.jsx'
import AddProductModal from '../features/products/components/AddProductModal.jsx'
import '../features/products/styles/products.css'
import './DashboardPage.css'

export default function ProductsPage() {
  const {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    products,
    totalCount,
    lowStockCount,
    outOfStockCount,
    selectedStatus,
    handleSelectStatus,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    deleteProduct,
    isAddModalOpen,
    isEditMode,
    formData,
    imagePreview,
    formErrors,
    handleOpenAddModal,
    handleOpenEditModal,
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
            {/* Top Bar (Dipertahankan identik) */}
            <DashboardTopBar
              slogan="“Akan melayani dengan sepenuh hati”"
            />

            {/* Konten Halaman Produk */}
            <div className="dash-content-body product-content-body">
              {/* Header Teks: Daftar Produk (Dipertahankan) */}
              <div className="product-top-row">
                <h1 className="product-page-title">Daftar Produk</h1>
              </div>

              {/* 3 Kartu Ringkasan (Total Produk, Stok Menipis, Stok Habis) */}
              <ProductSummaryCards
                total={totalCount}
                menipis={lowStockCount}
                habis={outOfStockCount}
                selectedStatus={selectedStatus}
                onSelectStatus={handleSelectStatus}
              />

              {/* Baris Pencarian & Tombol Tambah Produk */}
              <ProductHeaderAction
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onAddClick={handleOpenAddModal}
              />

              {/* Filter Kategori (Semua, ATK, Perlengkapan Kematian, Perlengkapan Sekolah, Lainnya) */}
              <ProductCategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              {/* Tabel Daftar Produk & Footer Pagination */}
              <ProductTable
                products={products}
                onDelete={deleteProduct}
                onEdit={handleOpenEditModal}
              />
            </div>
          </section>

          {/* 3. Modal Tambahkan / Edit Produk */}
          <AddProductModal
            isOpen={isAddModalOpen}
            isEditMode={isEditMode}
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
