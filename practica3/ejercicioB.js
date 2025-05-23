function verificarUsuario(usuario) {
    let Promesa = new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Usuario correcto");
        } else {
            reject("Usuario incorrecto");
        }
    });
    return Promesa;
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
verificarUsuario("pepe")
    .then(res => console.log(res))
    .catch(err => console.log(err));