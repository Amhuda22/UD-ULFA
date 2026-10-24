export default function TransactionPaymentForm({
  customer,
  onCustomerChange,
  paymentMethod,
  onPaymentMethodChange,
}) {
  return (
    <div className="trx-customer-row">
      {/* Pelanggan */}
      <div className="trx-form-group">
        <label className="trx-form-label" htmlFor="trx-customer-select">
          Pelanggan :
        </label>
        <div className="trx-select-wrapper">
          <select
            id="trx-customer-select"
            className="trx-select"
            value={customer}
            onChange={(e) => onCustomerChange(e.target.value)}
          >
            <option value="Umum">Umum</option>
            <option value="Pelanggan Tetap">Pelanggan Tetap</option>
            <option value="Grosir">Grosir</option>
            <option value="Instansi / Sekolah">Instansi / Sekolah</option>
          </select>
          <div className="trx-select-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#23584e" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Metode Pembayaran */}
      <div className="trx-form-group">
        <label className="trx-form-label" htmlFor="trx-payment-select">
          Metode Pembayaran :
        </label>
        <div className="trx-select-wrapper">
          <select
            id="trx-payment-select"
            className="trx-select"
            value={paymentMethod}
            onChange={(e) => onPaymentMethodChange(e.target.value)}
          >
            <option value="Tunai">Tunai</option>
            <option value="Transfer Bank (BCA)">Transfer Bank (BCA)</option>
            <option value="QRIS">QRIS</option>
            <option value="Hutang / Tempo">Hutang / Tempo</option>
          </select>
          <div className="trx-select-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#23584e" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
