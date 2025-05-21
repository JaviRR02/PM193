const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

const luis = personas.find(persona => persona.nombre === "Luis");
console.log(luis);
// Salida: { nombre: 'Luis', edad: 35 }

personas.forEach(persona => {
    console.log(`El nombre de la persona es ${persona.nombre} y su edad es ${persona.edad}`);
});

const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(`La suma de las edades es ${sumaEdades}`);
// Salida: La suma de las edades es 85