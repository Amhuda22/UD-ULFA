export default function DashboardSalesChart() {
  // Koordinat Y untuk 8 level (35 s/d 0) dengan rentang y: 16 s/d 220
  // Y-step = (220 - 16) / 7 = 29.1px per 5 unit (tinggi & mengisi penuh kontainer)
  const levels = [
    { label: '35', y: 16 },
    { label: '30', y: 45 },
    { label: '25', y: 74 },
    { label: '20', y: 103 },
    { label: '15', y: 132 },
    { label: '10', y: 161 },
    { label: '5', y: 190 },
    { label: '0', y: 220 },
  ]

  // Data 7 hari penjualan seluruhnya 0 (di baseline y=220)
  const daysData = [
    { day: 'Sen', x: 34, y: 220 },
    { day: 'Sel', x: 72, y: 220 },
    { day: 'Rab', x: 110, y: 220 },
    { day: 'Kam', x: 148, y: 220 },
    { day: 'Jum', x: 186, y: 220 },
    { day: 'sab', x: 224, y: 220 },
    { day: 'Min', x: 258, y: 220 },
  ]

  const polylineStr = daysData.map((d) => `${d.x},${d.y}`).join(' ')

  return (
    <div className="chart-card">
      <h3 className="chart-title">Grafik Penjualan</h3>

      <div className="chart-svg-container">
        <svg viewBox="0 0 270 248" className="sales-chart-svg">
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

          {/* Garis Dasar Horizontal Sumbu X (Solid di y=220) */}
          <line x1="26" y1="220" x2="262" y2="220" stroke="#1c4731" strokeWidth="1.2" />

          {/* Sumbu Y Vertikal Kiri (Solid dari y=10 s/d 220) */}
          <line x1="26" y1="10" x2="26" y2="220" stroke="#1c4731" strokeWidth="1.2" />

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
            <circle key={`tick-${idx}`} cx={d.x} cy="220" r="1.5" fill="#1c4731" />
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
              y="238"
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
