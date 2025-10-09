const nombre: string = "Goku";
let puntosVida: number | string = 100;
let puntosVida2: number | 'FULL' = 100;
const estaVivo: boolean = true;

puntosVida = 'LLENA';
puntosVida2 = 'FULL';

console.log({
    nombre, puntosVida, puntosVida2, estaVivo
})

// No podemos asignar un número a nombre
// nombre = 123;

// Necesario para que no de errores
// Es debido a que tenemos un proyecto Vite, no ocurrirá en Angular
export {};