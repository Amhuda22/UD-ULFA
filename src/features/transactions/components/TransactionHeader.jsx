export default function TransactionHeader({ searchQuery, onSearchChange, onAddClick }) {
  return (
    <div className="trx-header-section">
      <h1 className="trx-title">Transaksi Penjualan</h1>

      <div className="trx-search-row">
        <div className="trx-search-input-box">
          <img
            src="/icon-search.png"
            alt="Cari"
            className="trx-search-icon"
            style={{ width: '18px', height: '18px', objectFit: 'contain' }}
          />
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
          <img
            src="/icon-tambah.png"
            alt="Tambah"
            style={{ width: '18px', height: '18px', objectFit: 'contain', display: 'block' }}
          />
        </button>
      </div>
    </div>
  )
}
