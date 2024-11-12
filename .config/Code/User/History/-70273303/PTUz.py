from fastapi import FastAPI,status
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
async def create_book(book_data:Books):
    print(book_data)
    new_book = book_data.model_dump()
    books.append(new_book)
    return books