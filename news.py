from fastapi import APIRouter

from app.services.news_service import get_news

router=APIRouter()

@router.get("/")

async def all_news():

    return {
        "pakistan":get_news("pakistan"),
        "world":get_news("world")
    }

@router.get("/{category}")

async def category_news(category:str):

    return get_news(category)