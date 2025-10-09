/*
 *  ===== Código de TypeScript =====
 *  El código inicial muestra una serie de errores debido a la falta de interfaces.
 *  Para solucionar estos errores, hemos creado dos interfaces a continuación.
*/
//* ADDRESS - Interfaz que contiene los datos de una dirección
interface Address {
    calle : string,             // Calle
    pais : string,              // País
    ciudad : string             // Ciudad
} // ---------------------------------------------------------
//* SUPERHERO - Interfaz que representa a un superhéroe
interface SuperHero {
    name : string,              // Nombre
    age : number,               // Edad
    address : Address,          // Objeto Address
    showAddress:() => void      // MÉTODO - ShowAddress
} // ---------------------------------------------------------
//* Creación Objeto SuperHero llamado "superHeroe"
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() { // SHOW ADDRESS - Devuelve el nombre del superhéroe, su ciudad y su país
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
} // ---------------------------------------------------------
//* PROGRAMA --------------------------------------------------
const address = superHeroe.showAddress();
console.log( address );
export {};