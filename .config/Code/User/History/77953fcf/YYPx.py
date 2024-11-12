from todo_list import todosss as todo_list
from schemas import createTodoModel,updateTodoModel
from fastapi import FastAPI,status,APIRouter
from fastapi.exceptions import HTTPException

todo_router = APIRouter()

#SHOW ALL TODODS
@todo_router.get('/',status_code=status.HTTP_200_OK)
async def show_all_todos()->list:
    return todo_list

#GET ONE TODOS ITEM
@todo_router.post('/{todo_id}')
async def get_todo_item(todo_id:int)->dict:
    for todo in todo_list:
        if todo['id'] == todo_id:
            return todo
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Todo Not Found")


#ADD A TODOS ITEM

@todo_router.post('/',status_code=status.HTTP_201_CREATED)
async def create_todo(todo_data:createTodoModel)->dict:
    new_todo = todo_data.model_dump()
    todo_list.append(new_todo)
    return new_todo

#UPDATE TODOS
@todo_router.patch('/{todo_id}')
async def update_todo(todo_id:int,todo_data:updateTodoModel)->dict:
    for todo in todo_list:
        if todo['id'] == todo_id:
            todo['name'] = todo_data.name
            todo['time']  = todo_data.time
            todo['IsDone'] = todo_data.IsDone
            return todo
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Specific Todo Item Not Found!!")


#DELETE TODODS
@todo_router.delete('/{todo_id}')
async def delete_todo(todo_id:int)->list:
    for todo in todo_list:
        if todo['id'] == todo_id:
            todo_list.remove(todo)
            return todo_list
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="not found todo")
