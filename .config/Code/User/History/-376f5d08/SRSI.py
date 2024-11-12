from fastapi import FastAPI,APIRouter,status
from src.books.book_data import books
from fastapi.exceptions import HTTPException
from src.books.schemas import Create_Book
book_router = APIRouter()

# get all books
@book_router.get('/')
async def get_books() ->list:
    return books


# get 1 book
@book_router.post('/{book_id}')
async def get_a_book(book_id:int)->dict:
    for book in books:
        if book['id'] == book_id:
            return book
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Not found")

#create a new book
@book_router.post("/",status_code=status.HTTP_201_CREATED)
async def create_book(book_data:Create_Book)->dict:
    new_book = book_data.model_dump()
    books.append(new_book)
    return books


