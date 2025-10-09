// ALUMNO - Interfaz representativa de un Alumno de Ciclo Formativo
interface Alumno {
    nombre: string,                 // Nombre
    apellidos: string,              // Apellidos
    nacionalidad: string,           // Nacionalidad
    anyoNacimiento: number,         // Año de Nacimiento
    telefono: number,               // Teléfono
    email: string,                  // Email
    modulosMatriculados: string[],  // Array de String de los Módulos Matriculados
    convalidaIPE: boolean,          // True si Convalida el Módulo IPE
    nivelPadel?: number,            // Nivel de Padel (No obligatorio)
    procedencia?: string            // Centro de Procedencia (No obligatorio)
}

//ALUMNO 1: Antonio Benítez
const antonio : Alumno = {
    nombre: "Antonio",
    apellidos: "Benítez Rodríguez",
    nacionalidad: "España",
    anyoNacimiento: 2001,
    telefono: 654565656,
    email: "abenrod@g.educaand.es",
    modulosMatriculados: ["Programación","Base de Datos","Sistemas Informáticos"],
    convalidaIPE: true,
    nivelPadel: 0,   // NOTA: Tengo que jugar más padel :(
    procedencia: "MEDAC Nova"
}

//ALUMNO 2: María Delgado
const maria : Alumno = {
    nombre: "María",
    apellidos: "Delgado Romero",
    nacionalidad: "Alemania",
    anyoNacimiento: 2003,
    telefono: 654434445,
    email: "mariadelg@g.educaand.es",
    modulosMatriculados: ["Lenguaje de Marca","Programación"],
    convalidaIPE: false
    // Omitimos los atributos opcionales
}

console.table(antonio);
console.table(maria);
export{};