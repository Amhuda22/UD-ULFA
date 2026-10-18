export default function FinanceKpiCards({ income, expense, netProfit }) {
  return (
    <div className="finance-kpi-grid">
      {/* 1. Total Pemasukan */}
      <div className="finance-kpi-card card-income">
        <span className="finance-kpi-label">Total Pemasukan</span>
        <span className="finance-kpi-val val-income">{income}</span>
      </div>

      {/* 2. Total Pengeluaran */}
      <div className="finance-kpi-card card-expense">
        <span className="finance-kpi-label">Total Pengeluaran</span>
        <span className="finance-kpi-val val-expense">
          <span className="expense-prefix">Rp </span>
          <span className="expense-number">{expense.replace('Rp ', '')}</span>
        </span>
      </div>

      {/* 3. Laba Bersih */}
      <div className="finance-kpi-card card-profit">
        <span className="finance-kpi-label">Laba Bersih</span>
        <span className="finance-kpi-val val-profit">{netProfit}</span>
      </div>
    </div>
  )
}
