function LoginWaves() {
  return (
    <div className="login-waves-container" aria-hidden="true">
      {/* Top Left Waves */}
      <svg
        className="wave-decor wave-top-left"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 -50C120 -40 280 40 340 180C400 320 280 380 200 400C120 420 -50 400 -50 400Z"
          fill="url(#gradTL1)"
          opacity="0.55"
        />
        <path
          d="M-50 -50C80 -50 200 20 260 140C320 260 220 310 140 330C60 350 -50 320 -50 320Z"
          fill="url(#gradTL2)"
          opacity="0.75"
        />
        <path
          d="M-50 -50C40 -50 140 0 180 90C220 180 160 230 90 250C20 270 -50 240 -50 240Z"
          fill="url(#gradTL3)"
          opacity="0.85"
        />
        <defs>
          <linearGradient id="gradTL1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d877e8" />
            <stop offset="100%" stopColor="#eed0f8" />
          </linearGradient>
          <linearGradient id="gradTL2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cf5de2" />
            <stop offset="100%" stopColor="#e5a6f4" />
          </linearGradient>
          <linearGradient id="gradTL3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bf42d5" />
            <stop offset="100%" stopColor="#dc88f0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top Right Waves */}
      <svg
        className="wave-decor wave-top-right"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M650 -50C480 -30 360 60 320 190C280 320 390 380 480 400C570 420 650 390 650 390Z"
          fill="url(#gradTR1)"
          opacity="0.45"
        />
        <path
          d="M650 -50C520 -40 420 40 380 150C340 260 430 320 520 340C600 350 650 330 650 330Z"
          fill="url(#gradTR2)"
          opacity="0.65"
        />
        <defs>
          <linearGradient id="gradTR1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cca0f0" />
            <stop offset="100%" stopColor="#f3daf9" />
          </linearGradient>
          <linearGradient id="gradTR2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#be70e4" />
            <stop offset="100%" stopColor="#e8b2f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom Left Waves */}
      <svg
        className="wave-decor wave-bottom-left"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 450C80 440 240 370 290 250C340 130 250 60 170 30C90 0 -50 30 -50 30Z"
          fill="url(#gradBL1)"
          opacity="0.5"
        />
        <path
          d="M-50 450C60 450 180 390 220 290C260 190 190 120 120 90C50 60 -50 80 -50 80Z"
          fill="url(#gradBL2)"
          opacity="0.75"
        />
        <defs>
          <linearGradient id="gradBL1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d172e2" />
            <stop offset="100%" stopColor="#f4dbfc" />
          </linearGradient>
          <linearGradient id="gradBL2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#be45d6" />
            <stop offset="100%" stopColor="#e29cf4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom Right Waves */}
      <svg
        className="wave-decor wave-bottom-right"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M650 450C500 430 350 360 300 230C250 100 370 30 460 0C550 -20 650 10 650 10Z"
          fill="url(#gradBR1)"
          opacity="0.5"
        />
        <path
          d="M650 450C530 440 400 380 360 270C320 160 420 90 500 60C580 40 650 60 650 60Z"
          fill="url(#gradBR2)"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="gradBR1" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#d47be8" />
            <stop offset="100%" stopColor="#faeaff" />
          </linearGradient>
          <linearGradient id="gradBR2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#be4bd4" />
            <stop offset="100%" stopColor="#e5a4f5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default LoginWaves
