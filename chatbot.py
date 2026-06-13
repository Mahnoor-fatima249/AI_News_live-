from fastapi import APIRouter

from app.schemas.chatbot_schema import ChatRequest
from app.services.ai_service import ask_groq

router=APIRouter()

@router.post("/message")
async def chatbot(request:ChatRequest):

    answer=await ask_groq(request.message)

    return {
        "success":True,
        "response":answer
    }