from fastapi import FastAPI,status


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