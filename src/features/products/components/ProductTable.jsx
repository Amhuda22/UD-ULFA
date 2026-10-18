export default function ProductTable({ products, onDelete }) {
  return (
    <div className="product-table-card">
      <div className="product-table-scroll">
        <table className="product-table">
          <thead>
            <tr>
              <th className="col-no">No</th>
              <th className="col-img">Gambar</th>
              <th className="col-name">Nama Produk</th>
              <th className="col-cat">Kategori</th>
              <th className="col-price">Harga</th>
              <th className="col-stock">Stok</th>
              <th className="col-action">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="7" className="table-empty-cell">
                  Tidak ada produk yang cocok dengan pencarian atau kategori ini.
                </td>
              </tr>
            ) : (
              products.map((item) => (
                <tr key={item.id}>
                  {/* No */}
                  <td className="col-no">
                    <span className="no-badge">{item.no}</span>
                  </td>

                  {/* Gambar */}
                  <td className="col-img">
                    <div className="product-thumb-box">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-thumb-img"
                        loading="lazy"
                      />
                    </div>
                  </td>

                  {/* Nama Produk */}
                  <td className="col-name">
                    <span className="product-name-text">{item.name}</span>
                  </td>

                  {/* Kategori */}
                  <td className="col-cat">
                    <span className="product-cat-text">{item.category}</span>
                  </td>

                  {/* Harga */}
                  <td className="col-price">
                    <span className="product-price-text">{item.priceDisplay}</span>
                  </td>

                  {/* Stok */}
                  <td className="col-stock">
                    <span className="product-stock-text">{item.stock}</span>
                  </td>

                  {/* Aksi */}
                  <td className="col-action">
                    <div className="action-buttons-group">
                      {/* Tombol Edit */}
                      <button
                        type="button"
                        className="btn-action-edit"
                        title="Edit Produk"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>

                      {/* Tombol Hapus */}
                      <button
                        type="button"
                        className="btn-action-delete"
                        title="Hapus Produk"
                        onClick={() => onDelete(item.id)}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
