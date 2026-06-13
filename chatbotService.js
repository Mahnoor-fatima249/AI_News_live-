// chatbotService.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const chatbotService = {
  async sendMessage(message, conversationHistory = []) {
    const res = await fetch(`${BASE_URL}/chatbot/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history: conversationHistory }),
    })
    if (!res.ok) throw new Error('Chatbot response failed')
    return res.json()
  },

  async getNewsSummary(articleId) {
    const res = await fetch(`${BASE_URL}/chatbot/summarize/${articleId}`)
    if (!res.ok) throw new Error('Summary failed')
    return res.json()
  },
}

export default chatbotService
