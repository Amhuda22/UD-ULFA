import { useDashboard } from '../features/dashboard/hooks/useDashboard.js'
import DashboardSidebar from '../features/dashboard/components/DashboardSidebar.jsx'
import DashboardTopBar from '../features/dashboard/components/DashboardTopBar.jsx'
import DashboardKpiGrid from '../features/dashboard/components/DashboardKpiGrid.jsx'
import DashboardCategoryGrid from '../features/dashboard/components/DashboardCategoryGrid.jsx'
import DashboardSalesChart from '../features/dashboard/components/DashboardSalesChart.jsx'
import './DashboardPage.css'

export default function DashboardPage() {
  // Seluruh logic UI dan state dihandle oleh custom hook useDashboard sesuai SOP
  const {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    user,
    handleLogout,
    chartPoints,
    polylinePoints,
  } = useDashboard()

  return (
    <div className={`dash-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Chassis Frame Shell */}
      <div className={`tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-speaker" aria-hidden="true" />

        {/* Layar Tablet Dashboard */}
        <div className="dash-screen">
          {/* 1. Komponen Sidebar Navigasi Kiri */}
          <DashboardSidebar
            activeMenu={activeMenu}
            onSelectMenu={handleSelectMenu}
            onLogout={handleLogout}
          />

          {/* 2. Area Konten Utama Kanan */}
          <section className="dash-main">
            {/* Top Bar (Slogan & Tanggal Dinamis Hari Ini) */}
            <DashboardTopBar
              slogan="“Akan melayani dengan sepenuh hati”"
            />

            {/* Konten Body */}
            <div className="dash-content-body">
              {/* Sapaan Header */}
              <div className="dash-greeting-box">
                <h1 className="dash-page-title">Dashboard</h1>
                <p className="dash-page-subtitle">
                  Selamat datang, Owner
                </p>
              </div>

              {/* 4 Kartu Ringkasan KPI (Grid 2x2) - Data Dikosongkan */}
              <DashboardKpiGrid
                totalProduk="0"
                stokMenipis="0"
                transaksiHariIni="0"
                pendapatanHariIni="Rp. 0"
              />

              {/* Layout Bawah: Kategori Produk & Grafik Penjualan */}
              <div className="dash-lower-layout">
                {/* Grid Kategori Produk */}
                <DashboardCategoryGrid />

                {/* Grafik Tren Penjualan */}
                <DashboardSalesChart
                  points={chartPoints}
                  polylinePoints={polylinePoints}
                />
              </div>
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
