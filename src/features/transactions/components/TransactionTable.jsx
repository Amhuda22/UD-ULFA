export default function TransactionTable({ items, onDeleteItem, onUpdateQuantity }) {
  return (
    <div className="trx-table-card">
      <div className="trx-table-scroll">
        <table className="trx-table">
          <thead>
            <tr>
              <th className="col-no">No</th>
              <th className="col-product">Nama Produk</th>
              <th className="col-price">Harga</th>
              <th className="col-qty">jumlah</th>
              <th className="col-subtotal">Subtotal</th>
              <th className="col-action">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="6" className="trx-empty-cell">
                  Tidak ada produk dalam keranjang transaksi.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id}>
                  <td className="col-no">{String(item.no).endsWith('.') ? item.no : `${item.no}.`}</td>
                  <td className="col-product">{item.name}</td>
                  <td className="col-price">{item.priceDisplay}</td>
                  <td className="col-qty">{item.quantity}</td>
                  <td className="col-subtotal">{item.subtotalDisplay}</td>
                  <td className="col-action">
                    <button
                      type="button"
                      className="trx-btn-delete"
                      onClick={() => onDeleteItem(item.id)}
                      title={`Hapus ${item.name}`}
                      aria-label={`Hapus ${item.name}`}
                    >
                      <img
                        src="/icon-delete.png"
                        alt="Hapus"
                        style={{ width: '16px', height: '16px', objectFit: 'contain', display: 'block' }}
                      />
                    </button>
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
