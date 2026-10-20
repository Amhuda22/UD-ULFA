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
                        <img
                          src="/icon-edit.png"
                          alt="Edit"
                          style={{ width: '16px', height: '16px', objectFit: 'contain', display: 'block' }}
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
                          style={{ width: '16px', height: '16px', objectFit: 'contain', display: 'block' }}
                        />
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
