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
            <img
              src="/icon-search.png"
              alt="Cari"
              style={{ width: '18px', height: '18px', objectFit: 'contain', display: 'block' }}
            />
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
            <img
              src="/icon-tambah.png"
              alt="Tambah"
              style={{ width: '14px', height: '14px', objectFit: 'contain', display: 'block' }}
            />
          </span>
          <span>Tambahkan Produk</span>
        </button>
      </div>
    </div>
  )
}
