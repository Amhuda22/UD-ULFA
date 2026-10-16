function StoreLogo({ className = '', size = 92, alt = 'Logo UD.ULFA Toko' }) {
  // Aset resmi ikon toko resolusi tinggi tanpa background (100% transparan)
  return (
    <img
      src="/store-logo.png?v=2"
      alt={alt}
      className={`store-logo-img ${className}`}
      width={size}
      height={Math.round(size * (739 / 856))}
      loading="eager"
      decoding="async"
    />
  )
}

export default StoreLogo
