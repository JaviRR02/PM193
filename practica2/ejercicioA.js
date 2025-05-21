const persona = {
    nombre: "Javier Rodriguez",
    edad: 23,
    direccion: {
        ciudad: "Querétaro",
        pais: "MX"
    },
};

const {nombre, edad, direccion:{ciudad}} = persona;

console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
// Salida: Hola, mi nombre es Javier Rodriguez, tengo 23 años y vivo en Querétaro.