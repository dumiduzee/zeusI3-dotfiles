from fastapi import FastAPI
from src.books.routes import book_router


version = "v1"

app = FastAPI(
    version=version,
    title="Bookly Api"
)
app.include_router(book_router,prefix="/books")


    