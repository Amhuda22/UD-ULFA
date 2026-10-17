# Design System & Panduan Styling UD.ULFA

Setiap kali membuat atau memodifikasi halaman, komponen, atau styling baru di proyek ini, WAJIB menggunakan acuan berikut:

## 1. Font Family
- **Font Utama**: `Poppins`, sans-serif
- Import melalui Google Fonts: `family=Poppins:wght@300;400;500;600;700;800;900`
- Gunakan variabel CSS: `var(--font-primary, 'Poppins', sans-serif)`

## 2. Palet Warna (Color Palette)
- **Putih / Base Light**: `#ffffff` (`var(--color-white)`)
- **Soft Pink / Pastel Purple**: `#f0cff1` (`var(--color-soft-pink)`)
- **Magenta / Accent Purple**: `#ce49d2` (`var(--color-magenta)`)
- **Orange / Terracotta (Action / Highlight)**: `#de582e` (`var(--color-orange)`)

## 3. Penggunaan Tokens di CSS
```css
:root {
  --color-white: #ffffff;
  --color-soft-pink: #f0cff1;
  --color-magenta: #ce49d2;
  --color-orange: #de582e;
  --font-primary: 'Poppins', sans-serif;
}
```
