from fastapi import FastAPI,APIRouter
from book_data import books
router = APIRouter()


@router.get('/books')
async def get_books() ->list:
    return books