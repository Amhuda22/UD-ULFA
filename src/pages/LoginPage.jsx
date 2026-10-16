import '../features/auth/styles/login.css'

function LoginPage() {
  return (
    <div className="login-screen">
      <div className="login-content">
        {/* Storefront Icon */}
        <div className="login-icon-wrapper">
          <img
            src="/store-logo.png"
            alt="Logo UD.ULFA"
            className="store-logo-img"
            width={72}
            height={62}
          />
        </div>

        {/* Brand Name & Subtitle */}
        <h1 className="brand-title">UD.ULFA</h1>
        <p className="brand-subtitle">Lengkap Dan Terbaik</p>

        {/* Categories / Services */}
        <div className="brand-services">
          <p className="services-line">ATK | Peralatan Kematian | Peralatan Sekolah</p>
          <p className="services-line">Sekolah | DLL</p>
        </div>

        {/* Slogan */}
        <div className="brand-slogan-container">
          <p className="brand-slogan">“Melayani dengan sepenuh hati”</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
