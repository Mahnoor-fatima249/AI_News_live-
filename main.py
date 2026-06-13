from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.news import router as news_router
from app.api.chatbot import router as chatbot_router

# Create FastAPI app
app = FastAPI(
    title="AI News Platform",
    version="1.0.0"
)

# ✅ CORS (IMPORTANT for frontend React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # production me isko restrict karna
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(news_router, prefix="/api/news", tags=["News"])
app.include_router(chatbot_router, prefix="/api/chatbot", tags=["Chatbot"])

# Root endpoint
@app.get("/")
async def home():
    return {
        "status": "running",
        "message": "AI News Platform Backend is live 🚀"
    }