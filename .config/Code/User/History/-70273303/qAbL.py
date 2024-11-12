from fastapi import FastAPI,status
from fastapi.exceptions import HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()




books = [
    {
        "id":1,
        "name":"madol duua",
        "author":"Matin ",
        "genere":"village",
        "date":2024
    },
    {
        "id":2,
        "name":"Baddegama",
        "author":"mahagamasekara",
        "genere":"country",
        "date":2023
    },
    {
        "id":3,
        "name":"sherlock",
        "author":"athar C",
        "genere":"Mistry",
        "date":2021
    },
    {
        "id":4,
        "name":"mai mara mal",
        "author":"gunasena",
        "genere":"LOve",
        "date":2022
    }


]


class Books(BaseModel):
    id: int
    name: str
    author: str
    genere: str
    date: int 
    

# get all the books
@app.get('/books',response_model=List[Books])
async def get_all_books() -> list:
    return books

#create new book
@app.post('/create_book',status_code=status.HTTP_201_CREATED)
async def create_book(book_data:Books) -> list:
    print(type(book_data))
    new_book = book_data.model_dump()
    books.append(new_book)
    return books


#show a book
@app.get('/get_book/{book_id}',status_code=status.HTTP_202_ACCEPTED)
async def get_book(book_id:int):
    for book in books:
        if book['id'] == book_id:
            return book
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="book not found")

    