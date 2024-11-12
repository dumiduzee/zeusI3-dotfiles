from fastapi import FastAPI,APIRouter
from src.books.book_data import books
book_router = APIRouter()


@book_router.get('/books')
async def get_books() ->list:
    return books