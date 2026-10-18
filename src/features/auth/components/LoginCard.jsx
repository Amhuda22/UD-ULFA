export default function LoginCard({
  username,
  setUsername,
  password,
  setPassword,
  loading,
  feedback,
  onSubmit,
  onForgotPassword,
}) {
  return (
    <div className="login-card">
      <h2 className="login-card-title">Login</h2>
      <p className="login-card-subtitle">Masuk untuk mengakses sistem</p>

      <form onSubmit={onSubmit} className="login-form">
        {/* Field Username */}
        <div className="login-field-box">
          <span className="field-icon user-icon" aria-hidden="true">
            <img
              src="/user-icon.png"
              alt=""
              width="24"
              height="24"
              className="field-icon-img"
            />
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
            <img
              src="/lock-icon.png"
              alt=""
              width="24"
              height="24"
              className="field-icon-img"
            />
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
          onClick={onForgotPassword}
        >
          Lupa pasword?
        </button>
      </form>
    </div>
  )
}
