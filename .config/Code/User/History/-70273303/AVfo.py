from fastapi import FastAPI

app = FastAPI()


@app.get('/')
async def read():
    return {"message":"helo world"}   


@app.get('/greet/{name}')
async def greet (name:str) -> dict:
    return {"greeting":name}