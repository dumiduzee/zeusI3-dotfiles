from fastapi import FastAPI
from src.books.routes import router
app = FastAPI
app.include_router(router,prefix="books/")