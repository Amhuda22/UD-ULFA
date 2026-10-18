export default function FinanceTransactionsTable({ transactions }) {
  return (
    <div className="finance-table-section">
      <h2 className="finance-table-title">Rincian Transaksi</h2>

      <div className="finance-table-wrapper">
        <table className="finance-table">
          <thead>
            <tr>
              <th className="fth-date">Tanggal</th>
              <th className="fth-desc">Keterangan</th>
              <th className="fth-income">Pemasukan</th>
              <th className="fth-expense">Pengeluaran</th>
              <th className="fth-balance">Saldo</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx.id}>
                <td className="ftd-date">{trx.date}</td>
                <td className="ftd-desc">{trx.description}</td>
                <td className="ftd-income">{trx.income}</td>
                <td className="ftd-expense">{trx.expense}</td>
                <td className="ftd-balance">{trx.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
