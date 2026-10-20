/**
 * Utility untuk format tanggal Bahasa Indonesia secara dinamis
 * Mengikuti hari, tanggal, bulan, dan tahun saat ini.
 */

export function getCurrentFormattedDate(date = new Date()) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  
  const dayName = days[date.getDay()]
  const dateNum = date.getDate()
  const monthName = months[date.getMonth()]
  const year = date.getFullYear()
  
  return `${dayName}, ${dateNum} ${monthName} ${year}`
}

export function getCurrentDateString(date = new Date()) {
  const dateNum = String(date.getDate()).padStart(2, '0')
  const monthNum = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${dateNum}-${monthNum}-${year}`
}

export function getCurrentDateTimeString(date = new Date()) {
  const dateStr = getCurrentDateString(date)
  const hours = String(date.getHours()).padStart(2, '0')
  const mins = String(date.getMinutes()).padStart(2, '0')
  return `${dateStr} ${hours}.${mins}`
}
