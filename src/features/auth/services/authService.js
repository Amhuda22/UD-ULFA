// Service layer untuk autentikasi sesuai SOP (tempat request/response API)
export const authService = {
  async login({ username, password: _password }) {
    // Simulasi pemanggilan API login terstruktur (mapping request/response)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            username: username.trim(),
            role: username.toLowerCase() === 'admin' ? 'Administrator' : 'Kasir',
            token: 'mock-jwt-token-ud-ulfa',
            loginTime: new Date().toISOString(),
          },
        })
      }, 500)
    })
  },
}
