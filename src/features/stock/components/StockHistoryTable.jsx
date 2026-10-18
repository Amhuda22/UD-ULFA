export default function StockHistoryTable({ history }) {
  return (
    <div className="stock-history-card">
      <h2 className="stock-history-title">Riwayat Stok</h2>

      <div className="stock-table-wrapper">
        <table className="stock-history-table">
          <thead>
            <tr>
              <th className="col-hist-date">Tanggal</th>
              <th className="col-hist-product">Produk</th>
              <th className="col-hist-type">Jenis</th>
              <th className="col-hist-qty">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan="4" className="stock-empty-row">
                  Belum ada riwayat pergerakan stok.
                </td>
              </tr>
            ) : (
              history.map((item) => (
                <tr key={item.id}>
                  <td className="col-hist-date">{item.date}</td>
                  <td className="col-hist-product">{item.product}</td>
                  <td className="col-hist-type">{item.type}</td>
                  <td className={`col-hist-qty ${item.type === 'Masuk' ? 'qty-in' : 'qty-out'}`}>
                    {item.quantity}
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
