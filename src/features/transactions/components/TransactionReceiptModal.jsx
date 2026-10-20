import { getCurrentDateTimeString } from '../../../shared/utils/dateUtils.js'

export default function TransactionReceiptModal({
  isOpen,
  onClose,
  cartItems,
  totalDisplay,
  customer,
  paymentMethod = 'Tunai',
}) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="trx-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="receipt-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar */}
        <div className="receipt-modal-header">
          <span className="receipt-modal-header-title">Struk Kasir</span>
        </div>

        {/* Receipt Content Body */}
        <div className="receipt-modal-body">
          {/* Brand Logo & Name */}
          <div className="receipt-brand-header">
            <svg
              className="receipt-brand-icon"
              width="34"
              height="28"
              viewBox="0 0 32 30"
              fill="none"
            >
              {/* Awning stripes */}
              <path d="M4 6h24l-2 8H6L4 6z" fill="#23584e" />
              {/* Scallops */}
              <path d="M6 14c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5" fill="#23584e" />
              {/* Store body */}
              <rect x="6" y="16" width="20" height="10" fill="#23584e" />
              {/* Window */}
              <rect x="8" y="18" width="7" height="4.5" rx="0.5" fill="#ffffff" />
              {/* Door */}
              <rect x="18" y="18" width="6" height="8" rx="0.5" fill="#ffffff" />
              {/* Ground base line */}
              <rect x="4" y="27" width="24" height="2" rx="1" fill="#23584e" />
            </svg>
            <div className="receipt-brand-text">
              <span className="receipt-brand-name">UD.ULFA</span>
              <span className="receipt-brand-tagline">Lengkap Dan Terbaik</span>
            </div>
          </div>

          {/* Struk Pembelian Title */}
          <h2 className="receipt-document-title">Struk Pembelian</h2>

          {/* Meta Info */}
          <div className="receipt-meta-grid">
            <div className="receipt-meta-row">
              <span className="meta-label">No. Transaksi</span>
              <span className="meta-colon">:</span>
              <span className="meta-val">0001/2026</span>
            </div>
            <div className="receipt-meta-row">
              <span className="meta-label">Tanggal</span>
              <span className="meta-colon">:</span>
              <span className="meta-val">{getCurrentDateTimeString()}</span>
            </div>
            <div className="receipt-meta-row">
              <span className="meta-label">Kasir</span>
              <span className="meta-colon">:</span>
              <span className="meta-val">Vida</span>
            </div>
          </div>

          {/* Items Table */}
          <div className="receipt-products-table-wrapper">
            <table className="receipt-products-table">
              <thead>
                <tr>
                  <th className="rth-name">Nama Produk</th>
                  <th className="rth-qty">Jumlah</th>
                  <th className="rth-price">Harga</th>
                  <th className="rth-subtotal">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="rtd-name">{item.name}</td>
                    <td className="rtd-qty">{item.quantity}</td>
                    <td className="rtd-price">{item.priceDisplay}</td>
                    <td className="rtd-subtotal">{item.subtotalDisplay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total & Payment Section */}
          <div className="receipt-total-summary">
            <div className="receipt-summary-line total-line">
              <span className="summary-lbl">Total :</span>
              <span className="summary-val">{totalDisplay}</span>
            </div>
            <div className="receipt-summary-line pay-line">
              <span className="summary-lbl">
                Pembayaran : <span className="pay-method-val">{paymentMethod}</span>
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <p className="receipt-footer-quote">
            "Terimakasih atas kunjungan dan kepercayaan Anda berbelanja di toko kami"
          </p>

          {/* Action Buttons */}
          <div className="receipt-modal-actions">
            <button type="button" className="receipt-btn-print" onClick={handlePrint}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Cetak Struk</span>
            </button>
            <button type="button" className="receipt-btn-close" onClick={onClose}>
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
