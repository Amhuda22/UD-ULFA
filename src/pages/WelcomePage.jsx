import { useNavigate } from 'react-router-dom'
import StoreLogo from '../features/auth/components/StoreLogo.jsx'
import { useViewModeStore } from '../shared/stores/useViewModeStore.js'
import '../features/auth/styles/welcome.css'

export default function WelcomePage() {
  const navigate = useNavigate()
  const viewMode = useViewModeStore((state) => state.viewMode)
  const setViewMode = useViewModeStore((state) => state.setViewMode)

  return (
    <div className={`welcome-page-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Chassis Frame */}
      <div className={`welcome-tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        <div className="welcome-tablet-camera" aria-hidden="true" />

        {/* Layar / Screen */}
        <div
          className="welcome-screen"
          onClick={() => navigate('/login')}
          title="Klik untuk ke Halaman Login"
          style={{ cursor: 'pointer' }}
        >
          <div className="welcome-content">
            {/* Storefront Icon */}
            <div className="welcome-icon-wrapper">
              <StoreLogo width={92} height={80} className="welcome-logo-img" />
            </div>

            {/* Brand Name & Subtitle */}
            <h1 className="welcome-brand-title">UD.ULFA</h1>
            <p className="welcome-brand-subtitle">Lengkap Dan Terbaik</p>

            {/* Categories / Services */}
            <div className="welcome-brand-services">
              <p className="welcome-services-line">ATK | Peralatan Kematian | Peralatan Sekolah | DLL</p>
            </div>

            {/* Slogan Serif */}
            <div className="welcome-slogan-container">
              <p className="welcome-slogan">“Melayani dengan sepenuh hati”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating View Switcher Toggle */}
      <div className="welcome-view-toggle-bar">
        <button
          type="button"
          className={`welcome-toggle-btn ${viewMode === 'tablet' ? 'active' : ''}`}
          onClick={() => setViewMode('tablet')}
          title="Tampilan Mockup Tablet"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
          </svg>
          <span>Mockup Tablet</span>
        </button>
        <button
          type="button"
          className={`welcome-toggle-btn ${viewMode === 'fullscreen' ? 'active' : ''}`}
          onClick={() => setViewMode('fullscreen')}
          title="Tampilan Layar Penuh"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          <span>Layar Penuh</span>
        </button>
      </div>
    </div>
  )
}
