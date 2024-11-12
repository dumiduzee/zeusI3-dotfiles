import sys
import os
from fastapi import FastAPI
from src.todos.routers import todo_router
sys.path.append(os.path.join(os.path.dirname(__file__), 'src'))


VERSION = "V1"

app = FastAPI(
    version= VERSION,
    title="Todo Router"
)
app.include_router(todo_router,prefix=f"api/{VERSION}/todo")