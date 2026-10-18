export default function ProductHeaderAction({
  searchQuery,
  onSearchChange,
  onAddClick,
}) {
  return (
    <div className="product-top-row">
      <h1 className="product-page-title">Daftar Produk</h1>

      <div className="product-actions-bar">
        {/* Search Input Bar */}
        <div className="product-search-wrapper">
          <span className="product-search-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            className="product-search-input"
            placeholder="Cari nama produk"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Add Product Button */}
        <button
          type="button"
          className="btn-add-product"
          onClick={onAddClick}
        >
          <span className="btn-add-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </span>
          <span>Tambahkan Produk</span>
        </button>
      </div>
    </div>
  )
}
