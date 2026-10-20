import { getCurrentDateString } from '../../../shared/utils/dateUtils.js'

export default function StockForm({
  activeTab,
  onTabChange,
  form,
  onFormChange,
  onSubmit,
  productOptions,
}) {
  return (
    <div className="stock-form-section">
      {/* Tabs: Stok Masuk / Stok Keluar */}
      <div className="stock-tabs-header">
        <button
          type="button"
          className={`stock-tab-btn ${activeTab === 'Masuk' ? 'active' : ''}`}
          onClick={() => onTabChange('Masuk')}
        >
          Stok Masuk
        </button>
        <button
          type="button"
          className={`stock-tab-btn ${activeTab === 'Keluar' ? 'active' : ''}`}
          onClick={() => onTabChange('Keluar')}
        >
          Stok Keluar
        </button>
      </div>

      {/* Form Box */}
      <form className="stock-form-card" onSubmit={onSubmit}>
        {/* Tanggal */}
        <div className="stock-field-group">
          <label className="stock-field-label" htmlFor="stock-date">
            Tanggal :
          </label>
          <div className="stock-input-wrapper">
            <svg
              className="stock-input-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23584e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              {/* Dots in calendar */}
              <circle cx="8" cy="14" r="1" fill="#23584e" />
              <circle cx="12" cy="14" r="1" fill="#23584e" />
              <circle cx="16" cy="14" r="1" fill="#23584e" />
              <circle cx="8" cy="18" r="1" fill="#23584e" />
              <circle cx="12" cy="18" r="1" fill="#23584e" />
            </svg>
            <input
              id="stock-date"
              type="text"
              className="stock-input with-icon"
              value={form.date}
              onChange={(e) => onFormChange('date', e.target.value)}
              placeholder={getCurrentDateString()}
            />
          </div>
        </div>

        {/* Produk */}
        <div className="stock-field-group">
          <label className="stock-field-label" htmlFor="stock-product">
            Produk :
          </label>
          <div className="stock-select-wrapper">
            <select
              id="stock-product"
              className="stock-select"
              value={form.product}
              onChange={(e) => onFormChange('product', e.target.value)}
            >
              <option value="">Pilih Produk</option>
              {productOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="stock-select-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#23584e" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Jumlah */}
        <div className="stock-field-group">
          <label className="stock-field-label" htmlFor="stock-quantity">
            Jumlah :
          </label>
          <input
            id="stock-quantity"
            type="number"
            className="stock-input"
            value={form.quantity}
            onChange={(e) => onFormChange('quantity', e.target.value)}
            min="1"
            placeholder="0"
          />
        </div>

        {/* Keterangan */}
        <div className="stock-field-group">
          <label className="stock-field-label" htmlFor="stock-notes">
            Keterangan :
          </label>
          <textarea
            id="stock-notes"
            className="stock-textarea"
            value={form.notes}
            onChange={(e) => onFormChange('notes', e.target.value)}
            placeholder="Masukkan Keterangan..."
            rows={3}
          />
        </div>

        {/* Tombol Simpan */}
        <button type="submit" className="stock-btn-submit">
          Simpan
        </button>
      </form>
    </div>
  )
}
