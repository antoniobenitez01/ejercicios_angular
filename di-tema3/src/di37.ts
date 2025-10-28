/*
 *  ===== DESESTRUCTURACIÓN DE ARRAYS ======
 *   En este programa vamos a crear objetos de Alumno a través de
 *   interfaces con atributos de Array, mostrando los datos de cada uno de ellos
 *   haciendo uso de la deestructuración de Arrays.
 */
//* EXPENDIENTE - Representación de un expediente de FP
export interface Expediente {
    curso : string,                     // Curso
    notaMedia : number                  // Nota media
}// ---------------------------------------------------------------------
//* ALUMNO FP - Representación de un Alumno de Ciclo Formativo FP
interface AlumnoFP {
    nombre : string,
    apellidos : string,
    modulosProfesionales : string[],
    expedientes : Expediente[]
}// ---------------------------------------------------------------------
//* PROGRAMA ------------------------------------------------------------
// Creación objetos Expediente ----------------------
export const expediente1 : Expediente = {
    curso : "Desarrollo de Aplicaciones Multiplataforma",
    notaMedia : 10
};
export const expediente2 : Expediente = {
    curso : "Animación 3D y 2D",
    notaMedia : 9
};
const expediente3 : Expediente = {
    curso : "Desarrollo de Entornos Virtuales",
    notaMedia : 8
};// ------------------------------------------------
// Creación objetos AlumnoFP ------------------------
const alumno1 : AlumnoFP = {
    nombre : "Antonio",
    apellidos : "Benítez Rodríguez",
    modulosProfesionales : ["Programación","Bases de Datos"],
    expedientes : [expediente2,expediente3]
};
const alumno2 : AlumnoFP = {
    nombre : "Erin",
    apellidos : "Burgos Arrojo",
    modulosProfesionales : ["Sistemas Informáticos","Lenguaje de Marca"],
    expedientes : [expediente1,expediente2]
};
const alumno3 : AlumnoFP = {
    nombre : "Cármen",
    apellidos : "Del Río Jurado",
    modulosProfesionales : ["Inglés","Empresa e Iniciativa Emprendedora"],
    expedientes : [expediente1,expediente2,expediente3]
}; // ------------------------------------------------
//* Creación y Manipulación Array de AlumnoFP --------
const alumnos : AlumnoFP[] = [alumno1,alumno2,alumno3];
const [ ,alumnoElegido] = alumnos; // Desestructuramos el Segundo Alumno del Array de Alumnos
console.log("Mostrando información del 2º Alumno del Array de Alumnos ...");
console.table(alumnoElegido); // Mostramos el alumnoElegido en formato tabla

const {nombre,apellidos} = alumnoElegido; // Desestructuramos Nombre y Apellidos del alumnoElegido
console.log("Nombre y Apellidos del Segundo Alumno del Array:",nombre,apellidos);

const [moduloElegido] = alumnoElegido.modulosProfesionales; // Desestructuramos el primer módulo de la matrícula de alumnoElegido
console.log("Primer Módulo Profesional de su Matrícula:",moduloElegido);

const [ ,entradaElegida] = alumnoElegido.expedientes; // Extraemos la 2º Entrada del Expediente de alumnoElegido
const {curso, notaMedia} = entradaElegida; // Desestructuramos Curso y Nota Media de la 2º Entrada del Expediente de alumnoElegido
console.log("Curso y Nota Media de la 2º Entrada en su Expediente:",curso,"=",notaMedia);