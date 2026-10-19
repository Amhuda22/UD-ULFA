export default function DashboardSalesChart() {
  // Koordinat Y untuk 8 level (35 s/d 0) dengan rentang y: 22 s/d 148
  // Y-step = (148 - 22) / 7 = 18px per 5 unit
  const levels = [
    { label: '35', y: 22 },
    { label: '30', y: 40 },
    { label: '25', y: 58 },
    { label: '20', y: 76 },
    { label: '15', y: 94 },
    { label: '10', y: 112 },
    { label: '5', y: 130 },
    { label: '0', y: 148 },
  ]

  // Data 7 hari penjualan seluruhnya 0 (kosong di baseline y=148)
  const daysData = [
    { day: 'Sen', x: 30, y: 148 },
    { day: 'Sel', x: 67, y: 148 },
    { day: 'Rab', x: 104, y: 148 },
    { day: 'Kam', x: 141, y: 148 },
    { day: 'Jum', x: 178, y: 148 },
    { day: 'sab', x: 215, y: 148 },
    { day: 'Min', x: 252, y: 148 },
  ]

  const polylineStr = daysData.map((d) => `${d.x},${d.y}`).join(' ')

  return (
    <div className="chart-card">
      <h3 className="chart-title">Grafik Penjualan</h3>

      <div className="chart-svg-container">
        <svg viewBox="0 0 270 172" className="sales-chart-svg">
          {/* Garis Horizontal Grid Putus-putus Hijau Tua */}
          {levels.slice(0, 7).map((lvl, idx) => (
            <line
              key={idx}
              x1="26"
              y1={lvl.y}
              x2="262"
              y2={lvl.y}
              stroke="#1c4731"
              strokeWidth="1"
              strokeDasharray="2.5 2.5"
            />
          ))}

          {/* Garis Dasar Horizontal Sumbu X (Solid di y=148) */}
          <line x1="26" y1="148" x2="262" y2="148" stroke="#1c4731" strokeWidth="1.2" />

          {/* Sumbu Y Vertikal Kiri (Solid dari y=14 s/d 148) */}
          <line x1="26" y1="14" x2="26" y2="148" stroke="#1c4731" strokeWidth="1.2" />

          {/* Label Sumbu Y (35, 30, 25, 20, 15, 10, 5, 0) */}
          {levels.map((lvl, idx) => (
            <text
              key={idx}
              x="22"
              y={lvl.y + 3.5}
              textAnchor="end"
              className="chart-axis-label"
            >
              {lvl.label}
            </text>
          ))}

          {/* Titik Tick Hitam pada Sumbu Dasar X */}
          {daysData.map((d, idx) => (
            <circle key={`tick-${idx}`} cx={d.x} cy="148" r="1.5" fill="#1c4731" />
          ))}

          {/* Garis Tren Penjualan Toska / Cyan (#1bb5bd) */}
          <polyline
            fill="none"
            stroke="#1bb5bd"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={polylineStr}
          />

          {/* Label Hari di Bawah Grafik (Sen, Sel, Rab, Kam, Jum, sab, Min) */}
          {daysData.map((d, idx) => (
            <text
              key={`day-${idx}`}
              x={d.x}
              y="162"
              textAnchor="middle"
              className="chart-day-label"
            >
              {d.day}
            </text>
          ))}
        </svg>
      </div>
    </div>
  )
}
