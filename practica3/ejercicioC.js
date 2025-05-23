function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000); 
    });
}

async function obtenerDatos() {
    console.log("Esperando respuesta de la API...");
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}