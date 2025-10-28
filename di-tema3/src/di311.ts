/*
 *  === UTILIZAR HERENCIA ===
 *  Programa para crear una clase Persona y a continuación
 *  crea clases Profesor y Alumno que extiende de esta
*/

//* CREACIÓN CLASE PERSONA              ----------------------------------------------------

export class Persona{
    public nombre:string;
    public apellido:string;
    public edad:number;
    public localidad:string;
    public sexo?:string;

    constructor(nombre:string,apellido:string,edad:number,localidad:string,sexo:string = "Sin definir"){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.localidad = localidad;
        this.sexo = sexo;
    }
}
//* CREACIÓN CLASE PROFESOR             ----------------------------------------------------

export class Profesor extends Persona{
    public centro:string;
    public especialidad:string;
    public departamento:string;

    constructor(
        nombre:string,
        apellido:string,
        edad:number,
        localidad:string,
        sexo:string = "Sin definir",
        centro: string, 
        especialidad: string, 
        departamento: string
    )
    {
        super(nombre,apellido,edad,localidad,sexo);
        this.centro = centro;
        this.especialidad = especialidad;
        this.departamento = departamento;
    }
}

//* CREACIÓN CLASE ALUMNO               ----------------------------------------------------

export class Alumno extends Persona{
    public centro:string;
    public curso:string;
    public asignaturas:string[];

    constructor(
        nombre:string,
        apellido:string,
        edad:number,
        localidad:string,
        sexo:string = "Sin definir",
        centro:string,
        curso:string,
        asignaturas:string[]
    )
    {
        super(nombre,apellido,edad,localidad,sexo);
        this.centro = centro;
        this.curso = curso;
        this.asignaturas = asignaturas;
    }
}

//* CREACIÓN OBJETOS                    ----------------------------------------------------

const persona = new Persona("Antonio","Benítez Rodríguez",23,"Málaga","Hombre");
const profesor = new Profesor("María José","Díaz Perez",43,"Torremolinos","Mujer","I.E.S. Playamar","Programación","Lenguaje de Marca");
const alumno = new Alumno("Lucía","Torres Gallego",19,"Marbella",undefined,"I.E.S. Playamar","DAM",["Programación","Lenguaje de Marca","Bases de Datos"]);

console.table(persona);
console.table(profesor);
console.table(alumno);