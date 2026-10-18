import { useRef } from 'react'

export default function SettingsForm({
  form,
  onFieldChange,
  onLogoSelect,
  onSubmit,
}) {
  const fileInputRef = useRef(null)

  const handleChooseLogo = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onLogoSelect(file)
    }
  }

  return (
    <form className="settings-form" onSubmit={onSubmit}>
      {/* 1. Nama Toko */}
      <div className="settings-field-group">
        <label className="settings-field-label" htmlFor="settings-store-name">
          Nama Toko :
        </label>
        <input
          id="settings-store-name"
          type="text"
          className="settings-input"
          value={form.storeName}
          onChange={(e) => onFieldChange('storeName', e.target.value)}
          placeholder="UD ULFA"
        />
      </div>

      {/* 2. Alamat */}
      <div className="settings-field-group">
        <label className="settings-field-label" htmlFor="settings-address">
          Alamat :
        </label>
        <input
          id="settings-address"
          type="text"
          className="settings-input"
          value={form.address}
          onChange={(e) => onFieldChange('address', e.target.value)}
          placeholder="Gayam,Gayam,Bojonegoro"
        />
      </div>

      {/* 3. Nomor Whatsapp */}
      <div className="settings-field-group">
        <label className="settings-field-label" htmlFor="settings-whatsapp">
          Nomor Whatsapp :
        </label>
        <input
          id="settings-whatsapp"
          type="text"
          className="settings-input"
          value={form.whatsapp}
          onChange={(e) => onFieldChange('whatsapp', e.target.value)}
          placeholder="088930577296"
        />
      </div>

      {/* 4. Logo Toko */}
      <div className="settings-field-group">
        <label className="settings-field-label">Logo Toko</label>
        <div className="settings-logo-row">
          {/* Logo Preview Box */}
          <div className="settings-logo-box">
            <img
              src={form.logoUrl || '/store-logo.png'}
              alt="Logo Toko"
              className="settings-logo-img"
            />
          </div>

          {/* Ubah Logo Button */}
          <button
            type="button"
            className="settings-btn-change-logo"
            onClick={handleChooseLogo}
          >
            Ubah Logo
          </button>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/* 5. Tombol Simpan Perubahan */}
      <button type="submit" className="settings-btn-submit">
        Simpan Perubahan
      </button>
    </form>
  )
}
