from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel

app = FastAPI()


@app.get('/')
async def read():
    return {"message":"helo world"}   



# url parameters
# @app.get('/greet/{name}')
# async def greet (name:str) -> dict:
    # return {"greeting":name}
# 

# querry parameters

# @app.get('/greet')
# async def greet(age:int):
    # return age


#mixing both of them
# @app.get('/greet/{name}')
# async def greet(name:str,age:int) -> dict:
    # return {"name":name,"age":age}
# 


# @app.get('/calculate/{number}')
# async def calculate(number:int,number2:int):
    # return number+number2;
# 

# practise

@app.get('/check/{name}')
async def checker(name:Optional[str] = "lakshan",name1:str="lakshan") -> str:
    if name is name1:
        return "equal"
    else:
        return "non equal"
    


class AddBookModel(BaseModel):
    name : str
    author : str



@app.post('/addBook')
async def add_book(book_data:AddBookModel):
    return {
        "name":book_data.name,
        "author":book_data.author
    }