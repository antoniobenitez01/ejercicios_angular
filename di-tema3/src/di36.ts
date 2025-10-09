/*
 *  ===== DESESTRUCTURACIÓN DE OBJETOS ======
 *   En este programa vamos a crear objetos de Alumno a través de
 *   interfaces de 3 niveles, mostrando los datos de cada uno de ellos
 *   haciendo uso de la deestructuración de datos.
 */
//* CENTRO EDUCATIVO - Representa los datos de un centro educativo
interface CentroEducativo {
    centro : string,                    // Centro
    localidad : string,                 // Localidad
    codigoCentro : string,              // Código del Centro (String)
    telefono : number                   // Teléfono
}// ---------------------------------------------------------------------
//* MATRICULA - Representa los datos de una matrícula de Ciclo Formativo
interface Matricula {
    modulos : string[],                 // Módulos del Ciclo Formativo (Array de String)
    ciclo : string,                     // Nombre del Ciclo Formativo
    centroEducativo : CentroEducativo   // Centro Educativo (objeto CentroEducativo)
}// ---------------------------------------------------------------------
//* ALUMNADO FP - Representación de un Alumno de Ciclo Formativo FP
interface AlumnadoFP {
    nombre : string,                    // Nombre
    apellidos : string,                 // Apellidos
    anyoNacimiento : number,            // Año de nacimiento
    nacionalidad : string,              // Nacionalidad
    matricula : Matricula               // Matrícula del Alumando (objeto Matrícula)
}// ---------------------------------------------------------------------
//* PROGRAMA ------------------------------------------------------------
const centro1 : CentroEducativo = {     // Creamos objeto de CentroEducativo
    centro : "I.E.S. Playamar",
    localidad : "Torremolinos",
    codigoCentro : "AAA123",
    telefono : 690565656
}
const matricula1 : Matricula = {        // Creamos objeto de Matrícula
    modulos : ["Programación","Bases de Datos","Sistemas Informáticos"],
    ciclo : "Desarrollo de Aplicaciones Multiplataforma",
    centroEducativo : centro1
}
const alumno1 : AlumnadoFP = {          // Creamos Objeto AlumnadoFP "alumno1"
    nombre : "Antonio",
    apellidos : "Benítez Rodríguez",
    anyoNacimiento : 2001,
    nacionalidad : "España",
    matricula : matricula1
}
const alumno2 : AlumnadoFP = {          // Creamos Objeto AlumnadoFP "alumno2"
    nombre : "Erin María",
    apellidos : "Burgos Arrojo",
    anyoNacimiento : 2005,
    nacionalidad : "Francia",
    matricula : matricula1
}

console.table(alumno1) // Mostramos Alumno1 en formato tabla
console.table(alumno2) // Mostramos Alumno2 en formato tabla

//* Realizamos la desestructuración de los datos
const {nombre,apellidos} = alumno1;                 // Nombre
const {ciclo} = alumno1.matricula;                  // Nombre del Ciclo Formativo
const {centro} = alumno1.matricula.centroEducativo; // Nombre del Centro

//* Mostramos los datos deestructurados por consola
console.log("Alumno:",nombre,apellidos);
console.log("Ciclo Formativo:",ciclo);
console.log("Centro:",centro);