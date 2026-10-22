import { getCurrentDateTimeString } from '../../../shared/utils/dateUtils.js'

export default function TransactionReceiptModal({
  isOpen,
  onClose,
  cartItems,
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

  // Calculate dynamic/default cash paid & change
  const numericTotal = typeof totalAmount === 'number'
    ? totalAmount
    : (cartItems || []).reduce((acc, item) => acc + (item.subtotal || 0), 0)

  const numericPaid = (() => {
    if (paidAmount !== undefined && paidAmount !== null) return Number(paidAmount)
    if (paymentMethod === 'Tunai') {
      if (numericTotal === 152000) return 200000
      if (numericTotal === 0) return 0
      if (numericTotal % 50000 === 0) return numericTotal
      return Math.ceil(numericTotal / 50000) * 50000
    }
    return numericTotal
  })()

  const numericChange = (() => {
    if (changeAmount !== undefined && changeAmount !== null) return Number(changeAmount)
    return Math.max(0, numericPaid - numericTotal)
  })()

  const formatNumberWithoutRp = (val) => {
    if (val === undefined || val === null) return '0'
    if (typeof val === 'number') {
      return val.toLocaleString('id-ID')
    }
    if (typeof val === 'string') {
      return val.replace(/^Rp\.?\s*/i, '').trim()
    }
    return String(val)
  }

  const totalNumberDisplay = formatNumberWithoutRp(totalDisplay ?? numericTotal)
  const paidDisplay = formatNumberWithoutRp(numericPaid)
  const changeDisplay = formatNumberWithoutRp(numericChange)

  return (
    <div className="trx-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="receipt-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar */}
        <div className="receipt-modal-header">
          <span className="receipt-modal-header-title">Struk Kasir</span>
        </div>

        {/* Modal Body with Inner Paper Sheet */}
        <div className="receipt-modal-body">
          {/* Inner White Paper Sheet */}
          <div className="receipt-paper-sheet">
            {/* Brand Logo & Name */}
            <div className="receipt-brand-header">
              <img
                src="/store-logo.png"
                alt="UD.ULFA Logo"
                className="receipt-brand-icon"
              />
              <div className="receipt-brand-text">
                <span className="receipt-brand-name">UD.ULFA</span>
                <span className="receipt-brand-tagline">
                  <span>Lengkap</span>
                  <span>Dan</span>
                  <span>Terbaik</span>
                </span>
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

            {/* Items Table Header (Paten / Fixed) */}
            <table className="receipt-products-table receipt-table-header">
              <thead>
                <tr>
                  <th className="rth-name">Nama Produk</th>
                  <th className="rth-qty">Jumlah</th>
                  <th className="rth-price">Harga</th>
                  <th className="rth-subtotal">Subtotal</th>
                </tr>
              </thead>
            </table>

            {/* Items Table Body (Scrollable container di bawah judul menu) */}
            <div className="receipt-products-table-wrapper">
              <table className="receipt-products-table">
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="rtd-name">{item.name}</td>
                      <td className="rtd-qty">{item.quantity}</td>
                      <td className="rtd-price">{formatNumberWithoutRp(item.price ?? item.priceDisplay)}</td>
                      <td className="rtd-subtotal">{formatNumberWithoutRp(item.subtotal ?? item.subtotalDisplay)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total & Payment Section */}
            <div className="receipt-total-summary">
              <div className="receipt-summary-line total-line">
                <span className="summary-lbl">Total :</span>
                <span className="summary-val">{totalNumberDisplay}</span>
              </div>
              <div className="receipt-summary-line pay-line">
                <span className="summary-lbl">Pembayaran :</span>
                <span className="pay-method-val">{paymentMethod}</span>
              </div>
            </div>

            {/* Bayar & Kembalian Section */}
            <div className="receipt-cash-summary">
              <div className="receipt-summary-line cash-line">
                <span className="summary-lbl">Bayar :</span>
                <span className="summary-val">{paidDisplay}</span>
              </div>
              <div className="receipt-summary-line change-line">
                <span className="summary-lbl">Kembalian :</span>
                <span className="summary-val">{changeDisplay}</span>
              </div>
            </div>

            {/* Footer Note */}
            <p className="receipt-footer-quote">
              "Terimakasih atas kunjungan dan kepercayaan<br />Anda berbelanja di toko kami"
            </p>
          </div>

          {/* Action Buttons (outside paper sheet) */}
          <div className="receipt-modal-actions">
            <button type="button" className="receipt-btn-print" onClick={handlePrint}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 3C6 2.44772 6.44772 2 7 2H17C17.5523 2 18 2.44772 18 3V6H6V3ZM4 8C2.89543 8 2 8.89543 2 10V16C2 17.1046 2.89543 18 4 18H6V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V18H20C21.1046 18 22 17.1046 22 16V10C22 8.89543 21.1046 8 20 8H4ZM8 14H16V20H8V14ZM10 16H14V18H10V16Z"
                />
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
