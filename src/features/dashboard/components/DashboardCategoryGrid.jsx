export default function DashboardCategoryGrid() {
  return (
    <div className="cat-section">
      <h2 className="cat-section-heading">Kategori Produk</h2>

      <div className="cat-grid">
        {/* 1. Alat Tulis Kerja */}
        <div className="cat-card">
          <div className="cat-icon-box">
            <img
              src="/icon-kategori-atk.png"
              alt="Alat Tulis Kerja"
              className="cat-icon-img"
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">Alat Tulis Kerja</span>
            <a href="#produk" className="cat-link">Lihat Produk &gt;</a>
          </div>
        </div>

        {/* 2. Peralatan Kematian */}
        <div className="cat-card">
          <div className="cat-icon-box">
            <img
              src="/icon-kategori-kematian.png"
              alt="Peralatan Kematian"
              className="cat-icon-img"
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">Peralatan Kematian</span>
            <a href="#produk" className="cat-link">Lihat Produk &gt;</a>
          </div>
        </div>

        {/* 3. Perlengkapan Sekolah */}
        <div className="cat-card">
          <div className="cat-icon-box">
            <img
              src="/icon-kategori-sekolah.png"
              alt="Perlengkapan Sekolah"
              className="cat-icon-img"
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">Perlengkapan Sekolah</span>
            <a href="#produk" className="cat-link">Lihat Produk &gt;</a>
          </div>
        </div>

        {/* 4. Tambahkan Produk */}
        <div className="cat-card">
          <div className="cat-icon-box">
            <img
              src="/icon-kategori-tambah.png"
              alt="Tambahkan Produk"
              className="cat-icon-img"
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">Tambahkan Produk</span>
            <a href="#tambah" className="cat-link">Tambahkan &gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}
