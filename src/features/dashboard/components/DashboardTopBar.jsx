import { getCurrentFormattedDate } from '../../../shared/utils/dateUtils.js'

export default function DashboardTopBar({ slogan = '“Akan melayani dengan sepenuh hati”', date }) {
  const displayDate = date || getCurrentFormattedDate()

  return (
    <div className="dash-top-bar">
      <div className="top-slogan">{slogan}</div>
      <div className="top-date">{displayDate}</div>
    </div>
  )
}
