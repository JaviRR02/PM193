const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

const luis = personas.find(personas => personas.nombre === "Luis");
console.log(luis);
// Salida: { nombre: 'Luis', edad: 35 }

personas.forEach(personas => {
    console.log(`El nombre de la persona es ${personas.nombre} y su edad es ${personas.edad}`);
});

// const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
// console.log(`La suma de las edades es ${sumaEdades}`);
// Salida: La suma de las edades es 85

const edades = personas.map(personas => personas.edad);

const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad);
console.log(`La suma de las edades es ${sumaEdades}`);
// Salida: La suma de las edades es 85