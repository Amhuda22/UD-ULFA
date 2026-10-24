import { getCurrentDateTimeString } from '../../../shared/utils/dateUtils.js'

export default function TransactionReceiptModal({
  isOpen,
  onClose,
  cartItems = [],
  totalDisplay,
  totalAmount,
  customer,
  paymentMethod = 'Tunai',
  paidAmount,
  changeAmount,
}) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  const numericTotal = typeof totalAmount === 'number'
    ? totalAmount
    : (cartItems || []).reduce((acc, item) => acc + (item.subtotal || 0), 0)

  const numericPaid = (() => {
    if (paidAmount !== undefined && paidAmount !== null && paidAmount !== '') return Number(paidAmount)
    return numericTotal
  })()

  const numericChange = (() => {
    if (changeAmount !== undefined && changeAmount !== null) return Number(changeAmount)
    return Math.max(0, numericPaid - numericTotal)
  })()

  const formatRp = (val) => {
    if (val === undefined || val === null) return 'Rp 0'
    const num = typeof val === 'number' ? val : Number(String(val).replace(/[^0-9]/g, '') || 0)
    return `Rp ${num.toLocaleString('id-ID')}`
  }

  return (
    <div className="trx-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="receipt-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar Gradient "Struk Kasir" */}
        <div className="receipt-modal-header">
          <span className="receipt-modal-header-title">Struk Kasir</span>
        </div>

        {/* Modal Body with Inner White Paper Sheet */}
        <div className="receipt-modal-body">
          {/* Inner White Paper Sheet */}
          <div className="receipt-paper-sheet">
            {/* Brand Logo & Name */}
            <div className="receipt-brand-header">
              <span className="receipt-brand-icon" aria-hidden="true" />
              <div className="receipt-brand-text">
                <span className="receipt-brand-name">UD.ULFA</span>
                <div className="receipt-brand-tagline">
                  <span>Lengkap</span>
                  <span>Dan</span>
                  <span>Terbaik</span>
                </div>
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

            {/* Header Tabel Permanen (Garis atas & bawah hijau permanen di luar scroll) */}
            <div className="receipt-table-header-bar">
              <span className="r-col-name">Nama Produk</span>
              <span className="r-col-qty">Jumlah</span>
              <span className="r-col-price">Harga</span>
              <span className="r-col-subtotal">Subtotal</span>
            </div>

            {/* Area Scroll Khusus Baris Produk */}
            <div className="receipt-table-scroll-area">
              {cartItems.map((item) => (
                <div key={item.id} className="receipt-product-row">
                  <span className="r-col-name" title={item.name}>{item.name}</span>
                  <span className="r-col-qty">{item.quantity}</span>
                  <span className="r-col-price">{formatRp(item.price)}</span>
                  <span className="r-col-subtotal">{formatRp(item.subtotal || (item.price * item.quantity))}</span>
                </div>
              ))}
            </div>

            {/* Dashed Horizontal Divider Line */}
            <div className="receipt-dashed-line" />

            {/* Summary Block: Total, Bayar, Kembalian */}
            <div className="receipt-summary-block">
              <div className="receipt-summary-row">
                <span className="summary-label">Total :</span>
                <span className="summary-value">{formatRp(numericTotal)}</span>
              </div>
              <div className="receipt-summary-row">
                <span className="summary-label">Bayar ({paymentMethod || 'Tunai'}) :</span>
                <span className="summary-value">{formatRp(numericPaid)}</span>
              </div>
              <div className="receipt-summary-row">
                <span className="summary-label">Kembalian :</span>
                <span className="summary-value">{formatRp(numericChange)}</span>
              </div>
            </div>

            {/* Footer Quote */}
            <div className="receipt-footer-quote">
              <p>&ldquo;Terimakasih atas kunjungan dan kepercayaan</p>
              <p>Anda berbelanja di toko kami&rdquo;</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="receipt-modal-actions">
            <button type="button" className="receipt-btn-print" onClick={handlePrint}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
              </svg>
              <span>Cetak Struk</span>
            </button>
            <button type="button" className="receipt-btn-close-alt" onClick={onClose}>
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
