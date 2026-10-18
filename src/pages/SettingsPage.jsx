import { useSettings } from '../features/settings/hooks/useSettings.js'
import DashboardSidebar from '../features/dashboard/components/DashboardSidebar.jsx'
import DashboardTopBar from '../features/dashboard/components/DashboardTopBar.jsx'
import SettingsForm from '../features/settings/components/SettingsForm.jsx'
import '../features/settings/styles/settings.css'
import './DashboardPage.css'

export default function SettingsPage() {
  // Sesuai React Coding SOP: Seluruh logic UI & state dihandle oleh custom hook useSettings
  const {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    form,
    handleFieldChange,
    handleLogoSelect,
    handleSubmit,
    successToast,
  } = useSettings()

  return (
    <div className={`dash-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Chassis Frame Shell */}
      <div className={`tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-speaker" aria-hidden="true" />

        {/* Layar Tablet */}
        <div className="dash-screen">
          {/* 1. Sidebar Navigasi Kiri (Dipertahankan identik sesuai kebutuhan user) */}
          <DashboardSidebar
            activeMenu={activeMenu}
            onSelectMenu={handleSelectMenu}
            onLogout={handleLogout}
          />

          {/* 2. Area Konten Utama Kanan */}
          <section className="dash-main">
            {/* Top Bar (Slogan & Tanggal) */}
            <DashboardTopBar
              slogan="“Akan melayani dengan sepenuh hati”"
              date="Kamis, 1 Okt 2026"
            />

            {/* Konten Halaman Pengaturan Sistem */}
            <div className="dash-content-body settings-content-body">
              {/* Judul Halaman */}
              <div className="settings-header-section">
                <h1 className="settings-page-title">Pengaturan Sistem</h1>
              </div>

              {/* Form Pengaturan Sistem */}
              <SettingsForm
                form={form}
                onFieldChange={handleFieldChange}
                onLogoSelect={handleLogoSelect}
                onSubmit={handleSubmit}
              />

              {/* Toast Feedback Sukses */}
              {successToast && (
                <div className="settings-toast" role="status">
                  {successToast}
                </div>
              )}
            </div>
          </section>
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
