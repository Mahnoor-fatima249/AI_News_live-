from groq import Groq
from app.config import settings

client = Groq(
    api_key=settings.GROQ_API_KEY
)

SYSTEM_PROMPT = """
You are AI News Assistant.

Rules:
1. Explain news in simple language.
2. Support English, Urdu and Roman Urdu.
3. Summarize long news articles.
4. Answer questions about politics, sports, technology, business and world news.
5. Be factual and concise.
6. If information is not available, say so clearly.
7. Do not make up facts.
"""

async def ask_groq(prompt: str):

    try:

        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,
            max_tokens=1000
        )

        return completion.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"