export default function TransactionHeader({ searchQuery, onSearchChange, onAddClick }) {
  return (
    <div className="trx-header-section">
      <h1 className="trx-title">Transaksi Penjualan</h1>

      <div className="trx-search-row">
        <div className="trx-search-input-box">
          <svg
            className="trx-search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#666"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="trx-search-input"
            placeholder="Cari nama produk..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="trx-btn-add-item"
          onClick={onAddClick}
          title="Tambah Produk ke Transaksi"
          aria-label="Tambah Produk"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
