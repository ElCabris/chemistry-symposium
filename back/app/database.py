import os
from sqlalchemy import create_engine, MetaData
from databases import Database
from dotenv import load_dotenv

# Load credentials from .env
load_dotenv()

DB_USER = os.getenv("DB_USER")
DB_PASSWORD =  os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("BD_NAME")

DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

database = Database(DATABASE_URL)
metadata = MetaData()
engine = create_engine(DATABASE_URL)