from fastapi import FastAPI

app = FastAPI()


@app.get('/')
async def read():
    return {"message":"helo world"}   



# url parameters
# @app.get('/greet/{name}')
# async def greet (name:str) -> dict:
    # return {"greeting":name}
# 

# querry parameters

@app.get('/greet')
async def greet(age:int) -> dict:
    return {"age":age}