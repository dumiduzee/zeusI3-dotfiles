class Books(BaseModel):
    id: int
    name: str
    author: str
    genere: str
    date: int 
    
class BookUpdateModel(BaseModel):
    name:str
    author:str
    genere:str