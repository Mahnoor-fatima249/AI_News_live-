// authService.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const authService = {
  async login(email, password) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) throw new Error('Login failed')
    const data = await res.json()
    localStorage.setItem('token', data.token)
    return data
  },

  async register(name, email, password) {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    if (!res.ok) throw new Error('Registration failed')
    return res.json()
  },

  async logout() {
    localStorage.removeItem('token')
  },

  getToken() {
    return localStorage.getItem('token')
  },

  isLoggedIn() {
    return !!localStorage.getItem('token')
  },
}

export default authService
