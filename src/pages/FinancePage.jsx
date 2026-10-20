import { useFinance } from '../features/finance/hooks/useFinance.js'
import DashboardSidebar from '../features/dashboard/components/DashboardSidebar.jsx'
import DashboardTopBar from '../features/dashboard/components/DashboardTopBar.jsx'
import FinancePeriodTabs from '../features/finance/components/FinancePeriodTabs.jsx'
import FinanceKpiCards from '../features/finance/components/FinanceKpiCards.jsx'
import FinanceTransactionsTable from '../features/finance/components/FinanceTransactionsTable.jsx'
import '../features/finance/styles/finance.css'
import './DashboardPage.css'

export default function FinancePage() {
  // Sesuai React Coding SOP: Seluruh logic UI & state dihandle oleh custom hook useFinance
  const {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    periodTab,
    setPeriodTab,
    selectedPeriod,
    setSelectedPeriod,
    currentKpi,
    transactions,
  } = useFinance()

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
            {/* Top Bar (Slogan & Tanggal Dinamis Hari Ini) */}
            <DashboardTopBar
              slogan="“Akan melayani dengan sepenuh hati”"
            />

            {/* Konten Halaman Laporan Keuangan */}
            <div className="dash-content-body finance-content-body">
              {/* Judul Halaman */}
              <div className="finance-header-section">
                <h1 className="finance-page-title">Laporan Keuangan</h1>
              </div>

              {/* 3 Tab Periode (Mingguan, Bulanan, Tahunan) & Dropdown Periode */}
              <FinancePeriodTabs
                periodTab={periodTab}
                onTabChange={setPeriodTab}
                selectedPeriod={selectedPeriod}
                onPeriodChange={setSelectedPeriod}
                periodOptions={currentKpi.periodOptions}
              />

              {/* 3 Kartu Ringkasan KPI (Total Pemasukan, Total Pengeluaran, Laba Bersih) */}
              <FinanceKpiCards
                income={currentKpi.income}
                expense={currentKpi.expense}
                netProfit={currentKpi.netProfit}
              />

              {/* Tabel Rincian Transaksi */}
              <FinanceTransactionsTable transactions={transactions} />
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
