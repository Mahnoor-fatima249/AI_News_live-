from pydantic_settings import BaseSettings

class Settings(BaseSettings):

    MONGO_URI:str
    DATABASE_NAME:str

    JWT_SECRET_KEY:str
    JWT_ALGORITHM:str

    GROQ_API_KEY:str

    class Config:
        env_file=".env"

settings=Settings()