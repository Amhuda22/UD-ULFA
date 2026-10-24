export default function ProductSummaryCards({
  total = 0,
  menipis = 0,
  habis = 0,
  selectedStatus = 'all',
  onSelectStatus,
}) {
  return (
    <div className="prod-summary-grid">
      {/* 1. Total Produk (Tersedia) */}
      <button
        type="button"
        className={`prod-summary-card card-total ${selectedStatus === 'tersedia' ? 'active' : ''}`}
        onClick={() => onSelectStatus && onSelectStatus('tersedia')}
        title="Klik untuk memfilter produk yang tersedia"
        aria-pressed={selectedStatus === 'tersedia'}
      >
        <div className="prod-summary-badge badge-total">
          <img
            src="/icon-total-produk.png"
            alt="Total Produk"
            className="prod-summary-icon"
          />
        </div>
        <div className="prod-summary-info">
          <span className="prod-summary-label">Total Produk</span>
          <span className="prod-summary-val">{total}</span>
        </div>
      </button>

      {/* 2. Stok Menipis */}
      <button
        type="button"
        className={`prod-summary-card card-menipis ${selectedStatus === 'menipis' ? 'active' : ''}`}
        onClick={() => onSelectStatus && onSelectStatus('menipis')}
        title="Klik untuk memfilter stok yang menipis"
        aria-pressed={selectedStatus === 'menipis'}
      >
        <div className="prod-summary-badge badge-menipis">
          <img
            src="/icon-stok-menipis.png"
            alt="Stok Menipis"
            className="prod-summary-icon"
          />
        </div>
        <div className="prod-summary-info">
          <span className="prod-summary-label">Stok Menipis</span>
          <span className="prod-summary-val">{menipis}</span>
        </div>
      </button>

      {/* 3. Stok Habis */}
      <button
        type="button"
        className={`prod-summary-card card-habis ${selectedStatus === 'habis' ? 'active' : ''}`}
        onClick={() => onSelectStatus && onSelectStatus('habis')}
        title="Klik untuk memfilter stok yang habis"
        aria-pressed={selectedStatus === 'habis'}
      >
        <div className="prod-summary-badge badge-habis">
          <img
            src="/icon-kategori-tambah.png"
            alt="Stok Habis"
            className="prod-summary-icon"
          />
        </div>
        <div className="prod-summary-info">
          <span className="prod-summary-label">Stok Habis</span>
          <span className="prod-summary-val">{habis}</span>
        </div>
      </button>
    </div>
  )
}
