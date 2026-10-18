export default function DashboardTopBar({ slogan = '“Akan melayani dengan sepenuh hati”', date = 'Kamis, 1 Okt 2026' }) {
  return (
    <div className="dash-top-bar">
      <div className="top-slogan">{slogan}</div>
      <div className="top-date">{date}</div>
    </div>
  )
}
