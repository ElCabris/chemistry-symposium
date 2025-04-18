from fastapi import FastAPI
from database import database

app = FastAPI()

@app.on_event("startup")
async def connect_to_db():
    await database.connect()

@app.on_event("shutdown")
async def disconnect_from_db():
    await database.disconnect()

@app.get("/")
async def root():
    return {"message": "Backend is connected to the database!"}