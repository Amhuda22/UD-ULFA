import { useRef } from 'react'
import StoreLogo from '../../auth/components/StoreLogo.jsx'
import { getCurrentFormattedDate } from '../../../shared/utils/dateUtils.js'

export default function AddProductModal({
  isOpen,
  onClose,
  formData,
  imagePreview,
  formErrors,
  onChange,
  onImageSelect,
  onSubmit,
}) {
  const fileInputRef = useRef(null)

  if (!isOpen) return null

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onImageSelect(file)
    }
  }

  return (
    <div className="product-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      {/* Modal Card */}
      <div className="product-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header Bar */}
        <div className="modal-header-bar">
          <div className="modal-header-brand">
            <div className="modal-brand-icon">
              <StoreLogo width={28} height={24} />
            </div>
            <span className="modal-brand-title">UD.ULFA</span>
          </div>

          <div className="modal-header-date">
            <span>{getCurrentFormattedDate()}</span>
          </div>
        </div>

        {/* Modal Body Form */}
        <form className="modal-form-content" onSubmit={onSubmit} noValidate>
          {/* Judul Modal */}
          <h2 className="modal-page-title">Tambahkan Produk</h2>

          {/* Grid Atas: Kolom Kiri Gambar, Kolom Kanan Detail */}
          <div className="modal-top-grid">
            {/* Kolom Kiri: Upload Gambar */}
            <div className="modal-upload-col">
              <div
                className={`upload-drop-zone ${imagePreview ? 'has-preview' : ''}`}
                onClick={handleBoxClick}
                tabIndex={0}
                role="button"
                aria-label="Pilih Gambar Produk"
              >
                {imagePreview ? (
                  <div className="upload-preview-wrapper">
                    <img src={imagePreview} alt="Preview Produk" className="upload-preview-img" />
                    <span className="upload-change-tag">Ganti Gambar</span>
                  </div>
                ) : (
                  <div className="upload-placeholder-content">
                    {/* Placeholder Icon Gallery/Image */}
                    <div className="upload-photo-icon" aria-hidden="true">
                      <img src="/upload-icon.png" alt="Pilih Gambar" className="upload-icon-img" />
                    </div>
                    <span className="upload-main-text">Pilih Gambar</span>
                    <span className="upload-sub-text">(Max 2 MB)</span>
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  className="upload-file-hidden"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Kolom Kanan: Nama, Kategori, Harga & Stok */}
            <div className="modal-fields-col">
              {/* Nama Produk */}
              <div className="modal-field-group">
                <label className="modal-label" htmlFor="input-product-name">
                  Nama Produk :
                </label>
                <input
                  id="input-product-name"
                  type="text"
                  className={`modal-input-green ${formErrors.name ? 'is-invalid' : ''}`}
                  placeholder="Contoh : Buku tulis"
                  value={formData.name}
                  onChange={(e) => onChange('name', e.target.value)}
                />
                {formErrors.name && (
                  <span className="modal-field-error">{formErrors.name}</span>
                )}
              </div>

              {/* Kategori */}
              <div className="modal-field-group">
                <label className="modal-label" htmlFor="select-product-category">
                  Kategori :
                </label>
                <div className="modal-select-wrapper">
                  <select
                    id="select-product-category"
                    className={`modal-select-green ${formErrors.category ? 'is-invalid' : ''}`}
                    value={formData.category}
                    onChange={(e) => onChange('category', e.target.value)}
                  >
                    <option value="Pilih Kategori">Pilih Kategori</option>
                    <option value="ATK">ATK</option>
                    <option value="Perlengkapan Kematian">Perlengkapan Kematian</option>
                    <option value="Perlengkapan Sekolah">Perlengkapan Sekolah</option>
                  </select>
                  <span className="select-chevron-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
                {formErrors.category && (
                  <span className="modal-field-error">{formErrors.category}</span>
                )}
              </div>

              {/* Harga & Stok (2 Kolom Sejajar) */}
              <div className="modal-inline-fields">
                {/* Harga */}
                <div className="modal-field-group inline-group">
                  <label className="modal-label" htmlFor="input-product-price">
                    Harga :
                  </label>
                  <div className={`price-input-wrapper ${formErrors.price ? 'is-invalid' : ''}`}>
                    <span className="price-prefix">Rp</span>
                    <input
                      id="input-product-price"
                      type="text"
                      className={`modal-input-green price-field ${formErrors.price ? 'is-invalid' : ''}`}
                      placeholder=""
                      value={formData.price}
                      onChange={(e) => onChange('price', e.target.value)}
                    />
                  </div>
                  {formErrors.price && (
                    <span className="modal-field-error">{formErrors.price}</span>
                  )}
                </div>

                {/* Stok */}
                <div className="modal-field-group inline-group">
                  <label className="modal-label" htmlFor="input-product-stock">
                    Stok :
                  </label>
                  <input
                    id="input-product-stock"
                    type="number"
                    min="0"
                    className={`modal-input-green ${formErrors.stock ? 'is-invalid' : ''}`}
                    placeholder="0"
                    value={formData.stock}
                    onChange={(e) => onChange('stock', e.target.value)}
                  />
                  {formErrors.stock && (
                    <span className="modal-field-error">{formErrors.stock}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Baris Bawah: Deskripsi */}
          <div className="modal-field-group full-width-group">
            <label className="modal-label" htmlFor="textarea-product-desc">
              Deskripsi :
            </label>
            <textarea
              id="textarea-product-desc"
              rows={3}
              className="modal-textarea-green"
              placeholder="Masukkan Deskripsi Produk..."
              value={formData.description}
              onChange={(e) => onChange('description', e.target.value)}
            />
          </div>

          {/* Baris Tombol Aksi (Batal & Simpan) */}
          <div className="modal-actions-row">
            <button
              type="button"
              className="btn-modal-cancel"
              onClick={onClose}
            >
              Batal
            </button>

            <button
              type="submit"
              className="btn-modal-submit"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
