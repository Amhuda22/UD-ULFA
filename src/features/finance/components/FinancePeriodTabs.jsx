export default function FinancePeriodTabs({
  periodTab,
  onTabChange,
  selectedPeriod,
  onPeriodChange,
  periodOptions,
}) {
  return (
    <div className="finance-period-section">
      {/* 3 Period Tabs */}
      <div className="finance-tabs-row">
        <button
          type="button"
          className={`finance-tab-btn ${periodTab === 'Mingguan' ? 'active' : ''}`}
          onClick={() => onTabChange('Mingguan')}
        >
          Mingguan
        </button>
        <button
          type="button"
          className={`finance-tab-btn ${periodTab === 'Bulanan' ? 'active' : ''}`}
          onClick={() => onTabChange('Bulanan')}
        >
          Bulanan
        </button>
        <button
          type="button"
          className={`finance-tab-btn ${periodTab === 'Tahunan' ? 'active' : ''}`}
          onClick={() => onTabChange('Tahunan')}
        >
          Tahunan
        </button>
      </div>

      {/* Periode Dropdown */}
      <div className="finance-period-select-row">
        <label className="finance-period-label" htmlFor="finance-period-select">
          Periode :
        </label>
        <div className="finance-select-wrapper">
          <select
            id="finance-period-select"
            className="finance-select"
            value={selectedPeriod}
            onChange={(e) => onPeriodChange(e.target.value)}
          >
            {periodOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="finance-select-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#23584e" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
