// Service layer untuk autentikasi sesuai SOP (tempat request/response API)
export const DUMMY_USERS = [
  {
    username: 'udulfa',
    password: 'udulfa123',
    name: 'Owner UD. ULFA',
    role: 'Owner',
  },
  {
    username: 'admin',
    password: 'admin123',
    name: 'Administrator',
    role: 'Administrator',
  },
]

export const authService = {
  async login({ username, password }) {
    // Simulasi pemanggilan API login terstruktur (mapping request/response)
    return new Promise((resolve) => {
      setTimeout(() => {
        const u = username ? username.trim().toLowerCase() : ''
        const p = password ? password.trim() : ''

        const userFound = DUMMY_USERS.find(
          (user) => user.username.toLowerCase() === u && user.password === p
        )

        if (userFound) {
          resolve({
            success: true,
            data: {
              username: userFound.username,
              name: userFound.name,
              role: userFound.role,
              token: 'mock-jwt-token-ud-ulfa',
              loginTime: new Date().toISOString(),
            },
          })
        } else {
          resolve({
            success: false,
            message: 'Username atau pasword salah. Silakan coba lagi.',
          })
        }
      }, 400)
    })
  },
}
