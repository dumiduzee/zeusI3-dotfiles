from pydantic import BaseModel

class Create_Book(BaseModel):
    id:int
    name:str
    author:str
    published_year:str
    

class updateBookModel(BaseModel):
    name:set
    author:str
    published_year:str