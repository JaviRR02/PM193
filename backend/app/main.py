from fastapi import FastAPI #Importamos la clase pricipal de FastAPI
from fastapi.middleware.cors import CORSMiddleware #esto permite que otra apps se conecten (React Native)
from routes import router #Importamos las rutas que hemos definido en routes.py

app = FastAPI() #creamos la clase principal de FastAPI

#Creamos el filtro de seguridad CORS
#Esto es necesario para que la aplicacion de React Native pueda conectarse a nuestro backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas las origines
    allow_credentials=True, #permitimos que se envien credenciales (cookies, headers, etc.)
    allow_methods=["*"],  # Permitir todos los metodos (GET, POST, PUT, DELETE, PATCH, OPTIONS, etc.)
    allow_headers=["*"],  # Permitir todos los headers
)

app.include_router(router) #Incluimos las rutas que hemos definido en routes.py

