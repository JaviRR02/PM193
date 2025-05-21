const productos = [
    { nombre: " Laptop", precio: 12000 },
    { nombre: " Mouse", precio: 250 },
    { nombre: " Teclado", precio: 750 },
    { nombre: " Monitor", precio: 3000 }
];

const costo = productos.filter(productos => productos.precio > 1000);
const nombres = costo.map(productos => productos.nombre);

console.log(nombres);
// Salida: [ ' Laptop', ' Monitor' ]