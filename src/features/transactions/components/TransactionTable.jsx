export default function TransactionTable({
  items,
  onDeleteItem,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="trx-table-card">
      {/* Header Tabel Tetap di Atas (Penuh dan rapi tanpa terpotong scrollbar) */}
      <div className="trx-table-header-box">
        <table className="trx-table trx-table-head">
          <colgroup>
            <col className="col-item" />
            <col style={{ width: '78px' }} />
            <col style={{ width: '88px' }} />
            <col style={{ width: '38px' }} />
          </colgroup>
          <thead>
            <tr>
              <th className="col-item">Item</th>
              <th className="col-qty">Jumlah</th>
              <th className="col-subtotal">Subtotal</th>
              <th className="col-action">Aksi</th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Body Tabel yang Bisa Di-scroll (Scrollbar mulai persis di bawah garis judul) */}
      <div className="trx-table-scroll">
        <table className="trx-table trx-table-body">
          <colgroup>
            <col className="col-item" />
            <col style={{ width: '78px' }} />
            <col style={{ width: '88px' }} />
            <col style={{ width: '38px' }} />
          </colgroup>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="4" className="trx-empty-cell">
                  Keranjang belanja masih kosong.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id}>
                  <td className="col-item">{item.name}</td>
                  <td className="col-qty">
                    <div className="trx-qty-stepper">
                      <button
                        type="button"
                        className="trx-qty-btn"
                        onClick={() => onDecrement(item.id)}
                        title="Kurangi 1"
                        aria-label="Kurangi 1"
                      >
                        –
                      </button>
                      <span className="trx-qty-val">{item.quantity}</span>
                      <button
                        type="button"
                        className="trx-qty-btn"
                        onClick={() => onIncrement(item.id)}
                        title="Tambah 1"
                        aria-label="Tambah 1"
                      >
                        +
                      </button>
                    </div>
                  </td>
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
