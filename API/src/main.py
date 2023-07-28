from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Step 1: Import the CORS middleware

app = FastAPI()

# Step 2: Add the CORS middleware to allow requests from all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# default route
@app.get("/")
def read_root():
    return {"Hello": "World"}

# route for recommendation by thematic
@app.get("/recommendation/thematic/{thematic_str}")
def read_recommendation_thematic(thematic_str: str):
    return {"thematic": thematic_str}

# route for recommendation by weather
@app.get("/recommendation/weather/")
def read_recommendation_weather():
    return {"Hello": "World"}

# route for recommendation by list
@app.get("/recommendation/weather/{thematic_str}")
def read_recommendation_thematic(thematic_str: str):
    return {"thematic": thematic_str}
