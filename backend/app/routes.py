from fastapi import APIRouter #Sistema de rutas
from data import nombres #del data.py iimportamos los nombres (datos)

router = APIRouter() #Creamos un objeto para poder definir las rutas

@router.get("/nombres") #Definimos la ruta (endpoints) GET llamada /nombres
def get_nombre(): #esta funcion se ejecutara cuando se haga una peticion GET a /nombres
    return nombres #Retornamos los datos de nombres

#Sirve como buena practica para seccionar bien las rutas que tenemos
#y asi no amontonar toto en el main.py