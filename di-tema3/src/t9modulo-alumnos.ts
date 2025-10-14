/*
 *  ======== IMPORTANDO Y EXPORTANDO - Alumnos ========
 *  Programa que crea una serie de objetos a través de interfaces importadas 
 *  y hace uso de sus métodos para mostrar los distintos datos de los objetos
 */
// --------------------------------------------------------------------------------
/* IMPORT - Importamos los siguientes elementos del archivo './t9modulo-instituto':
 * Instituto : Interfaz
 * Dirección : Interfaz
 * Ensenanza : Interfaz
 * Alumno : Interfaz
 * TipoEnsenanza : Tipo Enumerado
 */
import {Instituto, Direccion, Ensenanza, Alumno, TipoEnsenanza} from './t9modulo-instituto';

// CREACIÓN OBJETOS DIRECCIÓN
const dir1: Direccion = {calle: "De Las Flores", cp: 29654, localidad: "Málaga", provincia: "Andalucía"};

// CREACIÓN OBJETOS ENSEÑANZA
const fp: Ensenanza = {nivel: "FP", obligatoria: false, fp: "Desarrollo de Aplicaciones Multiplataforma", tipo: TipoEnsenanza.Tarde};
const eso: Ensenanza = {nivel: "ESO", obligatoria: true, tipo: TipoEnsenanza.Manana};
const bach: Ensenanza = {nivel: "Bachillerato", obligatoria: false, tipo: TipoEnsenanza.Telematico};

// CREACIÓN OBJETOS ALUMNO
const alumno1: Alumno = {nombre: "Antonio Benítez", edad: 23, sexo: "V", ensenanza: fp, direccion: dir1};
const alumno2: Alumno = {nombre: "María del Mar", edad: 18, sexo: "M", ensenanza: eso, direccion: dir1};

// CREACIÓN OBJETO INSTITUTO
const instituto: Instituto = {
    nombre: "I.E.S. Cerro del Viento",
    director: "Jose María",
    telefono: 657788967,
    correo: "direccion@cerrodelviento.es",
    direccion: dir1,
    listado: [alumno1],
    anadirAlumno(alumno: Alumno){
        this.listado.push(alumno);
    },
    mostrarAlumnos(){
        let contador : number = 1;
        this.listado.forEach((alumno) => {
            const{nombre, edad, sexo} = alumno;
            console.log("Alumno Nº",contador,"- Nombre:",nombre,"Edad:",edad,"Sexo:",sexo);
            contador++;
        });
    },
    direccionInstituto(){
        const{calle, cp, localidad, provincia} = this.direccion;
        console.log("Dirección",this.nombre,"= Calle:",calle,"- CP:",cp,"- Localidad:",localidad,"- Provincia:",provincia);
    }
};
// ------------------------------------------------
//* PROGRAMA --------------------------------------
console.log("--- IMPORTANDO Y EXPORTANDO ---");
console.log("\nMostrando listado objetos Alumno en Instituto ...");
instituto.mostrarAlumnos();
console.log("\nAñadiendo nuevo alumno a Instituto ...");
instituto.anadirAlumno(alumno2);
console.log("\nMostrando listado objetos Alumno en Instituto actualizado ...");
instituto.mostrarAlumnos();
console.log("\nMostrando dirección completa del instituto ...");
instituto.direccionInstituto();
export{};