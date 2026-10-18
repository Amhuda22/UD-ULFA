import { useNavigate } from 'react-router-dom'
import StoreLogo from '../../auth/components/StoreLogo.jsx'
import LogoutConfirmationModal from '../../auth/components/LogoutConfirmationModal.jsx'
import { useAuthStore } from '../../auth/stores/useAuthStore.js'
import '../../auth/styles/logout-modal.css'

export default function DashboardSidebar({ activeMenu, onSelectMenu, onLogout }) {
  const navigate = useNavigate()

  // Global Auth Logout Modal State
  const isLogoutModalOpen = useAuthStore((state) => state.isLogoutModalOpen)
  const openLogoutModal = useAuthStore((state) => state.openLogoutModal)
  const closeLogoutModal = useAuthStore((state) => state.closeLogoutModal)
  const logout = useAuthStore((state) => state.logout)

  const handleTriggerLogout = () => {
    openLogoutModal()
  }

  const handleConfirmLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <aside className="dash-sidebar">
        {/* Brand Logo & Name */}
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <StoreLogo width={44} height={38} />
          </div>
          <span className="sidebar-brand-title">UD.ULFA</span>
        </div>

        {/* Menu List */}
        <nav className="sidebar-nav">
          {/* 1. Dashboard */}
          <button
            type="button"
            className={`sidebar-nav-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={() => onSelectMenu('dashboard')}
          >
            <span className="nav-icon">
              <img src="/dashboard-icon.png" alt="Dashboard" className="nav-icon-img" width="28" height="28" />
            </span>
            <span className="nav-label">Dashboard</span>
          </button>

          {/* 2. Produk */}
          <button
            type="button"
            className={`sidebar-nav-item ${activeMenu === 'produk' ? 'active' : ''}`}
            onClick={() => onSelectMenu('produk')}
          >
            <span className="nav-icon">
              <img src="/produk-icon.png" alt="Produk" className="nav-icon-img" width="28" height="28" />
            </span>
            <span className="nav-label">Produk</span>
          </button>

          {/* 3. Transaksi */}
          <button
            type="button"
            className={`sidebar-nav-item ${activeMenu === 'transaksi' ? 'active' : ''}`}
            onClick={() => onSelectMenu('transaksi')}
          >
            <span className="nav-icon">
              <img src="/transaksi-icon.png" alt="Transaksi" className="nav-icon-img" width="28" height="28" />
            </span>
            <span className="nav-label">Transaksi</span>
          </button>

          {/* 4. Stok */}
          <button
            type="button"
            className={`sidebar-nav-item ${activeMenu === 'stok' ? 'active' : ''}`}
            onClick={() => onSelectMenu('stok')}
          >
            <span className="nav-icon">
              <img src="/stok-icon.png" alt="Stok" className="nav-icon-img" width="28" height="28" />
            </span>
            <span className="nav-label">Stok</span>
          </button>

          {/* 5. Keuangan */}
          <button
            type="button"
            className={`sidebar-nav-item ${activeMenu === 'keuangan' ? 'active' : ''}`}
            onClick={() => onSelectMenu('keuangan')}
          >
            <span className="nav-icon">
              <img src="/keuangan-icon.png" alt="Keuangan" className="nav-icon-img" width="28" height="28" />
            </span>
            <span className="nav-label">Keuangan</span>
          </button>

          {/* 6. Pengaturan */}
          <button
            type="button"
            className={`sidebar-nav-item ${activeMenu === 'pengaturan' ? 'active' : ''}`}
            onClick={() => onSelectMenu('pengaturan')}
          >
            <span className="nav-icon">
              <img src="/pengaturan-icon.png" alt="Pengaturan" className="nav-icon-img" width="28" height="28" />
            </span>
            <span className="nav-label">Pengaturan</span>
          </button>
        </nav>

        {/* Logout Button */}
        <div className="sidebar-footer">
          <button
            type="button"
            className="sidebar-logout-btn"
            onClick={handleTriggerLogout}
          >
            <span className="nav-icon">
              <img src="/logout-icon.png" alt="Logout" className="nav-icon-img" width="28" height="28" />
            </span>
            <span className="nav-label">Logout</span>
          </button>
        </div>
      </aside>

      {/* Full Tablet Screen Logout Confirmation Modal */}
      <LogoutConfirmationModal
        isOpen={isLogoutModalOpen}
        onCancel={closeLogoutModal}
        onConfirm={handleConfirmLogout}
      />
    </>
  )
}
