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

# @app.get('/greet')
# async def greet(age:int):
    # return age


#mixing both of them
# @app.get('/greet/{name}')
# async def greet(name:str,age:int) -> dict:
    # return {"name":name,"age":age}
# 


# @app.get('/calculate/{number}')
# async def calculate(number:int,number2:int):
    # return number+number2;
# 

# practise

@app.get('/check/{name}')
async def checker(name:str,name1:str) -> str:
    if name is name1:
        return "equal"
    else:
        return "non equal"