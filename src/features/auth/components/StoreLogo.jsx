function StoreLogo({ className = '', size = 72 }) {
  return (
    <svg
      className={`store-logo ${className}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo UD.ULFA Toko"
      role="img"
    >
      {/* Awning Top Bar */}
      <path
        d="M10 16C10 14.8954 10.8954 14 12 14H52C53.1046 14 54 14.8954 54 16V18H10V16Z"
        fill="#1e1822"
      />
      {/* Striped Awning Body */}
      <path
        d="M8 18L12 32H18L15 18H8ZM21 18L23 32H29L28 18H21ZM34 18L35 32H41L43 18H34ZM49 18L46 32H52L56 18H49Z"
        fill="#1e1822"
      />
      {/* Awning Scalloped Bottom Edge */}
      <path
        d="M12 32C12 34 15 34 15 32C15 34 18 34 18 32C18 34 23 34 23 32C23 34 29 34 29 32C29 34 35 34 35 32C35 34 41 34 41 32C41 34 46 34 46 32C46 34 52 34 52 32"
        stroke="#1e1822"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Store Building Walls & Base */}
      <path
        d="M14 34V50H50V34H46V47H18V34H14Z"
        fill="#1e1822"
      />
      {/* Store Window & Door / Counter */}
      <rect x="20" y="37" width="10" height="7" rx="1" fill="#1e1822" />
      <rect x="34" y="37" width="12" height="13" rx="1" fill="#1e1822" />
      {/* Ground baseline */}
      <path
        d="M10 50H54"
        stroke="#1e1822"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default StoreLogo
