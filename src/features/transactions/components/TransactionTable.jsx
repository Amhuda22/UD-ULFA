export default function TransactionTable({ items, onDeleteItem, onUpdateQuantity }) {
  return (
    <div className="trx-table-container">
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
                <td className="col-no">{item.no}</td>
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
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
