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
              <th className="col-status">Status</th>
              <th className="col-action">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="8" className="table-empty-cell">
                  Tidak ada produk yang cocok dengan pencarian atau kategori ini.
                </td>
              </tr>
            ) : (
              products.map((item, idx) => {
                // Determine status badge
                const isOutOfStock = item.stock <= 0
                const isLowStock = !isOutOfStock && item.stock <= 20
                const statusText = isOutOfStock ? 'Habis' : isLowStock ? 'Menipis' : 'Tersedia'
                const statusClass = isOutOfStock
                  ? 'status-habis'
                  : isLowStock
                  ? 'status-menipis'
                  : 'status-tersedia'

                return (
                  <tr key={item.id || idx}>
                    {/* No */}
                    <td className="col-no">
                      <span className="no-text">{item.no || `${idx + 1}.`}</span>
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

                    {/* Status */}
                    <td className="col-status">
                      <span className={`status-badge ${statusClass}`}>
                        {statusText}
                      </span>
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
                          <img
                            src="/icon-edit.png"
                            alt="Edit"
                            className="action-icon-img action-icon-edit"
                          />
                        </button>

                        {/* Tombol Hapus */}
                        <button
                          type="button"
                          className="btn-action-delete"
                          title="Hapus Produk"
                          onClick={() => onDelete(item.id)}
                        >
                          <img
                            src="/icon-delete.png"
                            alt="Hapus"
                            className="action-icon-img action-icon-delete"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
