import { useLoginForm } from '../features/auth/hooks/useLoginForm.js'
import StoreLogo from '../features/auth/components/StoreLogo.jsx'
import LoginCard from '../features/auth/components/LoginCard.jsx'
import '../features/auth/styles/login.css'

export default function LoginPage() {
  // Seluruh logic UI dan state dihandle oleh custom hook sesuai SOP
  const {
    viewMode,
    setViewMode,
    username,
    setUsername,
    password,
    setPassword,
    loading,
    feedback,
    handleLoginSubmit,
    handleForgotPassword,
  } = useLoginForm()

  return (
    <div className={`page-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Chassis Frame Shell */}
      <div className={`tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-speaker" aria-hidden="true" />

        {/* Layar Tablet */}
        <div className="login-screen">
          <div className="login-screen-inner">
            {/* Top Brand Header */}
            <div className="brand-header-inline">
              <div className="brand-header-icon">
                <StoreLogo width={58} height={50} />
              </div>
              <div className="brand-header-text">
                <h1 className="brand-header-title">UD.ULFA</h1>
                <p className="brand-header-subtitle">Lengkap Dan Terbaik</p>
              </div>
            </div>

            {/* Komponen Presentasi Login Card */}
            <LoginCard
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              loading={loading}
              feedback={feedback}
              onSubmit={handleLoginSubmit}
              onForgotPassword={handleForgotPassword}
            />

            {/* Footer Copyright */}
            <p className="login-copyright">@ 2026 UD.ULFA</p>
          </div>
        </div>
      </div>

      {/* Floating View Switcher Toggle */}
      <div className="view-toggle-bar">
        <button
          type="button"
          className={`toggle-btn ${viewMode === 'tablet' ? 'active' : ''}`}
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
          className={`toggle-btn ${viewMode === 'fullscreen' ? 'active' : ''}`}
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
