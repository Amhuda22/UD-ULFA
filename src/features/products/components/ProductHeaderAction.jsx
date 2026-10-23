export default function ProductHeaderAction({
  searchQuery,
  onSearchChange,
  onAddClick,
}) {
  return (
    <div className="product-actions-bar">
      {/* Search Input Bar */}
      <div className="product-search-wrapper">
        <span className="product-search-icon" aria-hidden="true">
          <img
            src="/icon-search.png"
            alt="Cari"
            className="product-search-img"
          />
        </span>
        <input
          type="text"
          className="product-search-input"
          placeholder="Cari nama produk..."
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
        <span>Tambah Produk</span>
      </button>
    </div>
  )
}
