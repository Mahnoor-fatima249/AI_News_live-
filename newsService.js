// newsService.js - News API calls
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const newsService = {
  async getAll(category = '', page = 1, limit = 20) {
    const params = new URLSearchParams({ page, limit })
    if (category && category !== 'Sab') params.append('category', category)
    const res = await fetch(`${BASE_URL}/news?${params}`)
    if (!res.ok) throw new Error('News fetch failed')
    return res.json()
  },

  async getById(id) {
    const res = await fetch(`${BASE_URL}/news/${id}`)
    if (!res.ok) throw new Error('Article not found')
    return res.json()
  },

  async search(query) {
    const res = await fetch(`${BASE_URL}/news/search?q=${encodeURIComponent(query)}`)
    if (!res.ok) throw new Error('Search failed')
    return res.json()
  },

  async getBreaking() {
    const res = await fetch(`${BASE_URL}/news/breaking`)
    if (!res.ok) throw new Error('Breaking news fetch failed')
    return res.json()
  },

  async getTrending() {
    const res = await fetch(`${BASE_URL}/news/trending`)
    if (!res.ok) throw new Error('Trending news fetch failed')
    return res.json()
  },
}

export default newsService
