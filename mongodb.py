from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

client=AsyncIOMotorClient(settings.MONGO_URI)

db=client[settings.DATABASE_NAME]

users_collection=db["users"]
chat_collection=db["chat_history"]
saved_news_collection=db["saved_news"]