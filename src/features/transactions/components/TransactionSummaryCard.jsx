export default function TransactionSummaryCard({ totalDisplay, onCheckout, isDisabled }) {
  return (
    <div className="trx-summary-card">
      <div className="trx-total-header">
        <span className="trx-total-label">Total :</span>
        <span className="trx-total-amount">{totalDisplay}</span>
      </div>

      <div className="trx-summary-divider" />

      <button
        type="button"
        className="trx-btn-checkout"
        onClick={onCheckout}
        disabled={isDisabled}
      >
        Bayar &amp; Cetak Struk
      </button>
    </div>
  )
}
