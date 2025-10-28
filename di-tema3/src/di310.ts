/*
 *  ===TRABAJANDO CON CLASES ===
 *  Programa para crear una clase Estudiante e Instituto con sus correspondientes
 *  atributos y constructores, creando instancias de objeto Estudiante e Instituto
*/

import {Expediente} from './di37.ts';

const expediente1 : Expediente = {
    curso : "Animación 3D y 2D",
    notaMedia : 9
};
const expediente2 : Expediente = {
    curso : "Desarrollo de Entornos Virtuales",
    notaMedia : 8
};

//* CREACIÓN CLASE ESTUDIANTE           ----------------------------------------------------

export class Estudiante {
    public nombre: string;
    public apellidos: string;
    public edad: number;
    public localidad: string;
    public sexo?: string;
    public expediente: Expediente;

    constructor(nombre:string, apellidos:string, edad:number, localidad:string, expediente:Expediente, sexo:string = "Sin especificar"){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.localidad = localidad;
        this.sexo = sexo;
        this.expediente = expediente;
    }
}

//* CREACIÓN OBJETOS CLASE ESTUDIANTE   ----------------------------------------------------

const estudiante1 = new Estudiante("Antonio","Benítez Rodríguez",23,"Málaga",expediente1,"Hombre");
const estudiante2 = new Estudiante("María","Arroyo Bermúdez",20,"Torremolinos",expediente2);
console.table(estudiante1);
console.table(estudiante2);

//* CREACIÓN CLASE INSTITUTO            ----------------------------------------------------

export class Instituto {
    public centro:string;
    public localidad:string;
    public estudiantes:Estudiante[];

    constructor(centro:string,localidad:string,estudiantes:Estudiante[]){
        this.centro = centro;
        this.localidad = localidad;
        this.estudiantes = estudiantes;
    }
}

//* CREACIÓN OBJETOS CLASE INSTITUTO    ----------------------------------------------------

const grupoEstudiantes = [estudiante1,estudiante2]; //  Creamos grupo de Objeto Estudiantes
const instituto1 = new Instituto("I.E.S. Playamar","Torremolinos",grupoEstudiantes);
console.table(instituto1);