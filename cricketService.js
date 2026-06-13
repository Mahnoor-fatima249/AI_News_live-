// cricketService.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const cricketService = {
  async getLiveMatches() {
    const res = await fetch(`${BASE_URL}/cricket/live`)
    if (!res.ok) throw new Error('Live matches fetch failed')
    return res.json()
  },

  async getUpcoming() {
    const res = await fetch(`${BASE_URL}/cricket/upcoming`)
    if (!res.ok) throw new Error('Upcoming matches fetch failed')
    return res.json()
  },

  async getMatchDetails(matchId) {
    const res = await fetch(`${BASE_URL}/cricket/match/${matchId}`)
    if (!res.ok) throw new Error('Match details fetch failed')
    return res.json()
  },

  async getScorecard(matchId) {
    const res = await fetch(`${BASE_URL}/cricket/match/${matchId}/scorecard`)
    if (!res.ok) throw new Error('Scorecard fetch failed')
    return res.json()
  },
}

export default cricketService
