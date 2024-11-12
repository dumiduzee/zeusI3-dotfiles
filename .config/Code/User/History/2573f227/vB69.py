from pydantic import BaseModel
from typing import Optional

class createTodoModel(BaseModel):
    id:int
    name:str
    time:str
    IsDone:Optional[bool] = False


class updateTodoModel(BaseModel):
    name:str
    time:str
    IsDone:bool