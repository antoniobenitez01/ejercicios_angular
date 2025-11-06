/*
 *  === TRABAJANDO CON GENÉRICOS ===
 *  Función que muestra las posiciones de un Array
 *  de cualquier tipo (genérico)
*/

import {calendario,jugadores} from './di312.ts';

// -- MOSTRAR ARRAY - Recibe un Array genérico y muestra todas las posiciones del mismo
function mostrarArray<T> ( arrayGenerico: T[]): void {
    arrayGenerico.forEach((elemento,contador) => {
        console.log(`${contador+1}.`,elemento)
    });
}

console.log("--- Mostrando CALENDARIO (Array de Partidos) ---");
mostrarArray(calendario);
console.log("--- Mostrando ARRAY de JUGADOR ---");
mostrarArray(jugadores);


