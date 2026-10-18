export default function LogoutConfirmationModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null

  return (
    <div className="logout-screen-overlay" role="dialog" aria-modal="true">
      {/* Center Dialog Card Content */}
      <div className="logout-dialog-center">
        {/* White Logout Icon */}
        <div className="logout-big-icon">
          <svg width="68" height="68" viewBox="0 0 48 48" fill="none">
            {/* Door Frame */}
            <path
              d="M23 7H13C9.13401 7 6 10.134 6 14V34C6 37.866 9.13401 41 13 41H23"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Arrow Head */}
            <path
              d="M27 15L36 24L27 33"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrow Shaft */}
            <path
              d="M14 24H35"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title & Subtitle */}
        <h2 className="logout-confirm-title">Konfirmasi Logout</h2>
        <p className="logout-confirm-subtitle">Apakah Anda yakin Ingin Keluar ?</p>

        {/* Buttons */}
        <div className="logout-confirm-actions">
          <button
            type="button"
            className="logout-action-btn btn-cancel"
            onClick={onCancel}
          >
            Batal
          </button>
          <button
            type="button"
            className="logout-action-btn btn-confirm"
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
