export default function TransactionSummaryCard({
  totalDisplay,
  paidAmountFormatted,
  onPaidAmountChange,
  changeDisplay,
  onCheckout,
  onCancel,
  isDisabled,
}) {
  return (
    <div className="trx-bottom-section">
      {/* Sisi Kiri: Uang Dibayar & Kembalian */}
      <div className="trx-cash-calc-box">
        <div className="trx-cash-group">
          <label className="trx-cash-label" htmlFor="trx-paid-input">
            Uang Dibayar (Rp):
          </label>
          <div className="trx-cash-input-wrap">
            <input
              id="trx-paid-input"
              type="text"
              inputMode="numeric"
              className="trx-cash-input"
              placeholder="0"
              value={paidAmountFormatted}
              onChange={(e) => onPaidAmountChange(e.target.value)}
            />
          </div>
        </div>

        <div className="trx-cash-group">
          <label className="trx-cash-label">
            Kembalian (Rp):
          </label>
          <div className="trx-cash-input-wrap readonly">
            <span className="trx-cash-val">
              {changeDisplay.replace(/[[\]]/g, '')}
            </span>
          </div>
        </div>
      </div>

      {/* Sisi Kanan: Total Card & Tombol Aksi */}
      <div className="trx-summary-card">
        <span className="trx-total-label">Total :</span>
        <div className="trx-total-amount">{totalDisplay}</div>
        <div className="trx-total-divider" />

        <div className="trx-action-buttons-row">
          <button
            type="button"
            className="trx-btn-checkout"
            onClick={onCheckout}
            disabled={isDisabled}
          >
            Bayar &amp; Cetak Struk
          </button>
          <button
            type="button"
            className="trx-btn-cancel"
            onClick={onCancel}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  )
}
