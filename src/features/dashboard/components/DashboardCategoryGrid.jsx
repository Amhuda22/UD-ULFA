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
              style={{ width: '34px', height: '34px', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">
              Alat Tulis
              <br />
              Kerja
            </span>
            <a href="#produk" className="cat-link">Lihat Produk &gt;</a>
          </div>
        </div>

        {/* 2. Peralatan Kematian */}
        <div className="cat-card">
          <div className="cat-icon-box">
            <img
              src="/icon-kategori-kematian.png"
              alt="Peralatan Kematian"
              style={{ width: '34px', height: '34px', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">
              Peralatan Ke-
              <br />
              matian
            </span>
            <a href="#produk" className="cat-link">Lihat Produk &gt;</a>
          </div>
        </div>

        {/* 3. Perlengkapan Sekolah */}
        <div className="cat-card">
          <div className="cat-icon-box">
            <img
              src="/icon-kategori-sekolah.png"
              alt="Perlengkapan Sekolah"
              style={{ width: '34px', height: '34px', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">
              Perlengka-
              <br />
              pan Sekolah
            </span>
            <a href="#produk" className="cat-link">Lihat Produk &gt;</a>
          </div>
        </div>

        {/* 4. Tambahkan Produk */}
        <div className="cat-card">
          <div className="cat-icon-box">
            <img
              src="/icon-kategori-tambah.png"
              alt="Tambahkan Produk"
              style={{ width: '34px', height: '34px', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div className="cat-info">
            <span className="cat-name">
              Tambahk-
              <br />
              an Produk
            </span>
            <a href="#tambah" className="cat-link">Tambahkan &gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}
