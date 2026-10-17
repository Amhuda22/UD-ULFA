import { useState } from 'react'
import StoreLogo from '../features/auth/components/StoreLogo.jsx'
import '../features/auth/styles/login.css'

function LoginPage() {
  // Mode tampilan: default 'tablet' (sesuai persis mockup tablet klien) atau 'fullscreen'
  const [viewMode, setViewMode] = useState('tablet')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setFeedback(null)

    setTimeout(() => {
      setLoading(false)
      if (username.trim() && password.trim()) {
        setFeedback({ type: 'success', text: `Login berhasil! Selamat datang, ${username}.` })
      } else {
        setFeedback({ type: 'error', text: 'Silakan masukkan username dan pasword.' })
      }
    }, 600)
  }

  return (
    <div className={`page-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Chassis Frame Shell */}
      <div className={`tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        {/* Tablet camera notch pada bezel kiri (posisi landscape) */}
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-speaker" aria-hidden="true" />

        {/* Layar Tablet / Screen */}
        <div className="login-screen">
          <div className="login-screen-inner">
            {/* Top Brand Header: Logo Storefront + Teks Brand Berdampingan */}
            <div className="brand-header-inline">
              <div className="brand-header-icon">
                <StoreLogo width={58} height={50} />
              </div>
              <div className="brand-header-text">
                <h1 className="brand-header-title">UD.ULFA</h1>
                <p className="brand-header-subtitle">Lengkap Dan Terbaik</p>
              </div>
            </div>

            {/* Login Card Putih */}
            <div className="login-card">
              <h2 className="login-card-title">Login</h2>
              <p className="login-card-subtitle">Masuk untuk mengakses sistem</p>

              <form onSubmit={handleLoginSubmit} className="login-form">
                {/* Field Username */}
                <div className="login-field-box">
                  <span className="field-icon user-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="username-input"
                    className="field-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    required
                  />
                </div>

                {/* Field Pasword */}
                <div className="login-field-box">
                  <span className="field-icon lock-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="password-input"
                    className="field-input"
                    placeholder="Pasword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                  />
                </div>

                {/* Pesan Feedback */}
                {feedback && (
                  <div className={`login-feedback-msg ${feedback.type}`}>
                    {feedback.text}
                  </div>
                )}

                {/* Tombol Login Gradient Ungu */}
                <button
                  type="submit"
                  className="login-gradient-btn"
                  id="login-btn-submit"
                  disabled={loading}
                >
                  {loading ? 'Memproses...' : 'Login'}
                </button>

                {/* Lupa pasword? */}
                <button
                  type="button"
                  className="forgot-pasword-btn"
                  onClick={() => alert('Fitur lupa pasword: Silakan hubungi admin UD.ULFA.')}
                >
                  Lupa pasword?
                </button>
              </form>
            </div>

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
          title="Tampilan Mockup Tablet (Sesuai Desain)"
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

export default LoginPage
