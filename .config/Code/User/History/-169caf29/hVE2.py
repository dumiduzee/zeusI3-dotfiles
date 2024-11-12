from fastapi import FastAPI
from src.books.routes import book_router
from contextlib import asynccontextmanager

@asynccontextmanager
async def life_span(app:FastAPI):
    print("server started")
    yield
    print("server stopped")

VERSION = "V1"

app = FastAPI(
    title="Bookly",
    version=VERSION,
    lifespan=life_span
)
app.include_router(book_router,prefix="/books")