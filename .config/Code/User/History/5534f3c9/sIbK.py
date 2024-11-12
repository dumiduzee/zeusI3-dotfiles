from fastapi import FastAPI,status
from fastapi.exceptions import HTTPException

app = FastAPI()



todo_list = [
    {
        "id":1,
        "name":"Sample Note",
        "time":"12.10",
        "IsDone":False
    },
     {
        "id":2,
        "name":"Sample Note 2",
        "time":"1.50",
        "IsDone":False
    },
    
]


#SHOW ALL TODODS
@app.get('/todos',status_code=status.HTTP_200_OK)
async def show_all_todos()->list:
    return todo_list

#GET ONE TODOS ITEM
@app.post('/get_todo/{todo_id}')
async def get_todo_item(todo_id:int)->dict:
    for todo in todo_list:
        if todo['id'] == todo_id:
            return todo
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Todo Not Found")