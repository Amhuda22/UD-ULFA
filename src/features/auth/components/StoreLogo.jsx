function StoreLogo({ className = '', width = 50, height, alt = 'Logo UD.ULFA Toko' }) {
  return (
    <img
      src="/store-logo.png"
      alt={alt}
      className={`store-logo-img ${className}`}
      width={width}
      height={height || Math.round(width * (739 / 856))}
      style={{
        width: `${width}px`,
        height: height ? `${height}px` : 'auto',
        objectFit: 'contain',
        display: 'block'
      }}
      loading="eager"
      decoding="async"
    />
  )
}

export default StoreLogo
