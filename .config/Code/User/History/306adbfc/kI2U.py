
from fastapi import APIRouter
from src.books.book_data import books
from src.books.schemas import Books,BookUpdateModel
from fastapi.exceptions import HTTPException
from typing import List
from fastapi import status

book_router = APIRouter()


# get all the books
@book_router.get('/',response_model=List[Books])
async def get_all_books() -> list:
    return books

#create new book
@book_router.post('/',status_code=status.HTTP_201_CREATED)
async def create_book(book_data:Books) -> list:
    print(type(book_data))
    new_book = book_data.model_dump()
    books.append(new_book)
    return books


#show a book
@book_router.get('/{book_id}',status_code=status.HTTP_202_ACCEPTED)
async def get_book(book_id:int):
    for book in books:
        if book['id'] == book_id:
            return book
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="book not found")


#update a book
@book_router.patch('/{book_id}')
async def update_book(book_id:int,book_data:BookUpdateModel)-> dict:
    for book in books:
        if book['id'] == book_id:
            book['name'] = book_data.name
            book['author'] = book_data.author
            book['genere'] = book_data.genere

            return book

    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Book Not Found")


#delete a book
@book_router.delete('/{book_id}',status_code=status.HTTP_204_NO_CONTENT)
async def delete_book(book_id:int):
    for book in books:
        if book['id'] == book_id:
            books.remove(book)
            return {}

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Book not found")
