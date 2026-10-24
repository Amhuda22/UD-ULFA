/**
 * Format nominal rupiah untuk tampilan tabel produk:
 * - Di bawah 10 juta (< 10.000.000): ditampilkan penuh, contoh: Rp 9.000.000, Rp 150.000, Rp 5.000
 * - 10 juta s/d di bawah 1 miliar (>= 10.000.000): disingkat Jt, contoh: Rp 10 Jt, Rp 100 Jt
 * - 1 miliar s/d di bawah 1 triliun (>= 1.000.000.000): disingkat M, contoh: Rp 1 M, Rp 2,5 M
 * - 1 triliun ke atas (>= 1.000.000.000.000): disingkat T, contoh: Rp 1 T
 */
export function formatProductPrice(amount) {
  const num = typeof amount === 'number' ? amount : Number(String(amount || '').replace(/\D/g, '')) || 0

  if (num <= 0) {
    return 'Rp 0'
  }

  // Di bawah 10 juta: tampilkan lengkap (Rp 9.000.000, Rp 50.000, dst)
  if (num < 10_000_000) {
    return `Rp ${num.toLocaleString('id-ID')}`
  }

  // 10 Juta sampai di bawah 1 Miliar (10.000.000 - 999.999.999): contoh: Rp 10 Jt, Rp 100 Jt
  if (num < 1_000_000_000) {
    const val = num / 1_000_000
    const formatted = Number.isInteger(val)
      ? val.toString()
      : parseFloat(val.toFixed(2)).toString().replace('.', ',')
    return `Rp ${formatted} Jt`
  }

  // 1 Miliar sampai di bawah 1 Triliun (1.000.000.000 - 999.999.999.999): contoh: Rp 1 M, Rp 2,5 M
  if (num < 1_000_000_000_000) {
    const val = num / 1_000_000_000
    const formatted = Number.isInteger(val)
      ? val.toString()
      : parseFloat(val.toFixed(2)).toString().replace('.', ',')
    return `Rp ${formatted} M`
  }

  // 1 Triliun ke atas (>= 1.000.000.000.000): contoh: Rp 1 T
  const val = num / 1_000_000_000_000
  const formatted = Number.isInteger(val)
    ? val.toString()
    : parseFloat(val.toFixed(2)).toString().replace('.', ',')
  return `Rp ${formatted} T`
}

/**
 * Format harga lengkap untuk tooltip hover title
 */
export function formatFullRupiah(amount) {
  const num = typeof amount === 'number' ? amount : Number(String(amount || '').replace(/\D/g, '')) || 0
  return `Rp ${num.toLocaleString('id-ID')}`
}
