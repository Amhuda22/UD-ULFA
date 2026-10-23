export default function ProductSummaryCards({ total = 120, menipis = 8, habis = 2 }) {
  return (
    <div className="prod-summary-grid">
      {/* 1. Total Produk */}
      <div className="prod-summary-card card-total">
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
      </div>

      {/* 2. Stok Menipis */}
      <div className="prod-summary-card card-menipis">
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
      </div>

      {/* 3. Stok Habis */}
      <div className="prod-summary-card card-habis">
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
      </div>
    </div>
  )
}
