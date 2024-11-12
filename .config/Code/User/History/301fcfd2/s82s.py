
from fastapi import FastAPI
from src.todos import todo_router

VERSION = "V1"

app = FastAPI(
    version= VERSION,
    title="Todo Router"
)
app.include_router(todo_router,prefix=f"api/{VERSION}/todo")