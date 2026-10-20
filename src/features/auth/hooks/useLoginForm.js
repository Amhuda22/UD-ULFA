import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/useAuthStore.js'
import { authService } from '../services/authService.js'
import { loginSchema } from '../schemas/loginSchema.js'
import { useViewModeStore } from '../../../shared/stores/useViewModeStore.js'

export function useLoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const setUser = useAuthStore((state) => state.setUser)

  const viewMode = useViewModeStore((state) => state.viewMode)
  const setViewMode = useViewModeStore((state) => state.setViewMode)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setFeedback(null)

    // Validasi menggunakan skema Zod sesuai SOP
    const validation = loginSchema.safeParse({ username, password })
    if (!validation.success) {
      const errorMsg = validation.error.issues[0]?.message || 'Data login tidak valid.'
      setFeedback({ type: 'error', text: errorMsg })
      return
    }

    setLoading(true)
    try {
      const res = await authService.login(validation.data)
      if (res.success) {
        setUser(res.data)
        setFeedback({ type: 'success', text: 'Login berhasil! Mengalihkan ke dashboard...' })
        const destination = location.state?.from?.pathname || '/dashboard'
        setTimeout(() => {
          navigate(destination, { replace: true })
        }, 400)
      } else {
        setFeedback({ type: 'error', text: res.message || 'Username atau pasword salah.' })
      }
    } catch {
      setFeedback({ type: 'error', text: 'Terjadi kesalahan sistem saat login.' })
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = () => {
    alert('Fitur lupa pasword: Silakan hubungi admin UD.ULFA.')
  }

  return {
    viewMode,
    setViewMode,
    username,
    setUsername,
    password,
    setPassword,
    loading,
    feedback,
    handleLoginSubmit,
    handleForgotPassword,
  }
}
