import { useState } from 'react'
import StoreLogo from '../features/auth/components/StoreLogo.jsx'
import '../features/auth/styles/login.css'

function LoginPage() {
  // Mode tampilan: 'fullscreen' (layar penuh) atau 'tablet' (frame mockup tablet seperti ACC klien)
  const [viewMode, setViewMode] = useState('fullscreen')

  return (
    <div className={`page-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Frame Shell (hanya aktif saat viewMode === 'tablet') */}
      <div className={`tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        {/* Tablet camera notch */}
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-speaker" aria-hidden="true" />

        {/* Layar / Screen */}
        <div className="login-screen">
          <div className="login-content">
            {/* Storefront Icon Resmi Sesuai ACC Klien */}
            <div className="login-icon-wrapper">
              <StoreLogo size={92} className="store-logo-img" />
            </div>

            {/* Brand Name & Subtitle */}
            <h1 className="brand-title">UD.ULFA</h1>
            <p className="brand-subtitle">Lengkap Dan Terbaik</p>

            {/* Categories / Services (Sesuai ACC Desain Klien) */}
            <div className="brand-services">
              <p className="services-line">ATK | Peralatan Kematian | Peralatan Sekolah</p>
              <p className="services-line">Sekolah | DLL</p>
            </div>

            {/* Slogan Serif */}
            <div className="brand-slogan-container">
              <p className="brand-slogan">“Melayani dengan sepenuh hati”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating View Switcher Toggle (Memudahkan presentasi ke klien) */}
      <div className="view-toggle-bar">
        <button
          type="button"
          className={`toggle-btn ${viewMode === 'fullscreen' ? 'active' : ''}`}
          onClick={() => setViewMode('fullscreen')}
          title="Tampilan Layar Penuh"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          <span>Layar Penuh</span>
        </button>
        <button
          type="button"
          className={`toggle-btn ${viewMode === 'tablet' ? 'active' : ''}`}
          onClick={() => setViewMode('tablet')}
          title="Tampilan Mockup Tablet (Sesuai ACC)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
          </svg>
          <span>Mockup Tablet ACC</span>
        </button>
      </div>
    </div>
  )
}

export default LoginPage
