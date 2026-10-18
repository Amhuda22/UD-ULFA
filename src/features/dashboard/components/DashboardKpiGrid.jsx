export default function DashboardKpiGrid({
  totalProduk = '345',
  stokMenipis = '12',
  transaksiHariIni = '35',
  pendapatanHariIni = '9.678.000',
}) {
  return (
    <div className="kpi-grid">
      {/* 1. Total Produk */}
      <div className="kpi-card">
        <div className="kpi-icon-badge">
          <img
            src="/icon-total-produk.png"
            alt="Ikon Total Produk"
            style={{ width: '36px', height: '36px', objectFit: 'contain', display: 'block' }}
          />
        </div>
        <div className="kpi-data">
          <span className="kpi-title">Total Produk</span>
          <span className="kpi-num">{totalProduk}</span>
          <span className="kpi-subtext cyan">+5 Produk Baru</span>
        </div>
      </div>

      {/* 2. Stok Menipis */}
      <div className="kpi-card">
        <div className="kpi-icon-badge">
          <img
            src="/icon-stok-menipis.png"
            alt="Ikon Stok Menipis"
            style={{ width: '38px', height: '38px', objectFit: 'contain', display: 'block' }}
          />
        </div>
        <div className="kpi-data">
          <span className="kpi-title">Stok Menipis</span>
          <span className="kpi-num">{stokMenipis}</span>
          <span className="kpi-subtext cyan">Produk Perlu Di Perhatikan</span>
        </div>
      </div>

      {/* 3. Transaksi Hari Ini */}
      <div className="kpi-card">
        <div className="kpi-icon-badge">
          <img
            src="/icon-transaksi.png"
            alt="Ikon Transaksi Hari Ini"
            style={{ width: '38px', height: '38px', objectFit: 'contain', display: 'block' }}
          />
        </div>
        <div className="kpi-data">
          <span className="kpi-title">Transaksi Hari Ini</span>
          <span className="kpi-num">{transaksiHariIni}</span>
        </div>
      </div>

      {/* 4. Pendapatan Hari Ini */}
      <div className="kpi-card">
        <div className="kpi-icon-badge">
          <img
            src="/icon-pendapatan.png"
            alt="Ikon Pendapatan Hari Ini"
            style={{ width: '38px', height: '38px', objectFit: 'contain', display: 'block' }}
          />
        </div>
        <div className="kpi-data">
          <span className="kpi-title">Pendapatan Hari Ini</span>
          <span className="kpi-num">{pendapatanHariIni}</span>
        </div>
      </div>
    </div>
  )
}
