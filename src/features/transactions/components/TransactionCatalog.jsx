export default function TransactionCatalog({
  products,
  searchQuery,
  onSearchChange,
  onAddToCart,
}) {
  return (
    <div className="trx-catalog-section">
      <h2 className="trx-section-title">Katalog Produk</h2>

      {/* Search Input Box */}
      <div className="trx-catalog-search-box">
        <img
          src="/icon-search.png"
          alt="Cari"
          className="trx-search-icon"
          style={{ width: '16px', height: '16px', objectFit: 'contain' }}
        />
        <input
          type="text"
          className="trx-catalog-search-input"
          placeholder="Cari nama produk..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Product Cards Grid */}
      <div className="trx-catalog-grid-wrapper">
        <div className="trx-catalog-grid">
          {products.length === 0 ? (
            <div className="trx-catalog-empty">
              Produk &ldquo;{searchQuery}&rdquo; tidak ditemukan.
            </div>
          ) : (
            products.map((prod) => (
              <div
                key={prod.id}
                className="trx-product-card"
                onClick={() => onAddToCart(prod)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onAddToCart(prod)
                  }
                }}
              >
                <div className="trx-product-img-box">
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="trx-product-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="trx-product-img-empty">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  )}
                  <button
                    type="button"
                    className="trx-product-add-badge"
                    onClick={(e) => {
                      e.stopPropagation()
                      onAddToCart(prod)
                    }}
                    title={`Tambah ${prod.name}`}
                    aria-label={`Tambah ${prod.name}`}
                  >
                    <img
                      src="/icon-tambah.png"
                      alt="Tambah"
                      className="trx-product-add-icon"
                    />
                  </button>
                </div>
                <div className="trx-product-info">
                  <span className="trx-product-name">{prod.name}</span>
                  <span className="trx-product-price">
                    {prod.priceDisplay || `Rp ${Number(prod.price || 0).toLocaleString('id-ID')}`}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
