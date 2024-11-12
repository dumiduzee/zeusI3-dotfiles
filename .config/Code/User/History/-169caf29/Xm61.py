from fastapi import FastAPI
from src.books.routes import book_router
from contextlib import asynccontextmanager
from src.db.main import init_db

@asynccontextmanager
async def life_span(app:FastAPI):
    print("server started")
    await init_db()
    yield
    print("server stopped")

VERSION = "V1"

app = FastAPI(
    title="Bookly",
    version=VERSION,
    lifespan=life_span
)
app.include_router(book_router,prefix="/books")