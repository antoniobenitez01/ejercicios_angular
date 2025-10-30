/*
 *  === HERENCIA Y COMPOSICIÓN ===
 *  Programa que hace uso de la composición y herencia para 
 *  gestionar una liga de pádel con jugadores, equipos y árbitros.
*/

//* CREACIÓN CLASE PERSONA              ----------------------------------------------------

// DIRECCIÓN - Interfaz que representa la Dirección de una persona
interface Direccion {
    calle : string;
    cp : number;                          // Código Postal
    localidad : string;
    provincia : string;
}

export class Persona{
    public nombre : string;
    public apellidos : string;
    public genero : string;
    public telefono : string;
    public direccion  :Direccion;

    constructor(nombre:string,apellidos:string,genero:string,telefono:string,direccion:Direccion){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

//* CREACIÓN CLASE JUGADOR              ----------------------------------------------------

export class Jugador extends Persona{
    public categoria : number;            // Número categoría

    constructor(nombre:string,apellidos:string,genero:string,telefono:string,direccion:Direccion,categoria:number){
        super(nombre,apellidos,genero,telefono,direccion)
        this.categoria = categoria;
    }
}

// EQUIPO - Interfaz que representa un equipo con dos objetos Jugador
interface Equipo {
    jugador1 : Jugador;
    jugador2 : Jugador;
}

//* CREACIÓN CLASE ARBITRO              ----------------------------------------------------

export class Arbitro extends Persona{
    public colegiado : number;            // Número colegiado

    constructor(nombre:string,apellidos:string,genero:string,telefono:string,direccion:Direccion,colegiado:number){
        super(nombre,apellidos,genero,telefono,direccion)
        this.colegiado = colegiado;
    }
}

//* CREACIÓN CLASE PARTIDO              -----------------------------------------------------

// SET - Interfaz de Set que representa los puntos ganados por cada equipo en un Set
interface Set {
    puntos1 : number;
    puntos2 : number;
}

export class Partido {
    public equipo1 : Equipo;
    public equipo2 : Equipo;
    public fecha : Date;
    public hora : number;
    public recinto : string;
    public pista : number;
    public arbitro : Arbitro;
    public sets : Set[];

    constructor(equipo1 : Equipo,equipo2 : Equipo,fecha : Date,hora : number,recinto : string,pista : number,arbitro : Arbitro,sets : Set[]){
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.fecha = fecha;
        this.hora = hora;
        this.recinto = recinto;
        this.pista = pista;
        this.arbitro = arbitro;
        this.sets = sets;
    }

    getWinner() : string {
        var total1 = 0;
        var total2 = 0;
        this.sets.forEach((set) => {
            if(set.puntos1 > set.puntos2){
                total1++;
            }else if (set.puntos1 < set.puntos2){
                total2++;
            }
        });
        var strEquipo1 = `${this.equipo1.jugador1.nombre}-${this.equipo1.jugador2.nombre}`
        var strEquipo2 = `${this.equipo2.jugador1.nombre}-${this.equipo2.jugador2.nombre}`
        if(total1 == total2){
            return `El equipo ${strEquipo1} ha empatado al equipo ${strEquipo2} por ${total1} sets a ${total2}`;
        }else if(total1 > total2){
            return `El equipo ${strEquipo1} ha ganado al equipo ${strEquipo2} por ${total1} sets a ${total2}`;
        }else{
            return `El equipo ${strEquipo2} ha empatado al equipo ${strEquipo1} por ${total2} sets a ${total1}`;
        }
    }
}

//* CREACIÓN DE OBJETOS                 -----------------------------------------------------

// Creación objetos Dirección
const dir1 : Direccion = {calle : "Las Flores", cp : 29676, localidad : "Torremolinos", provincia : "Málaga"};  //  Dirección 1
const dir2 : Direccion = {calle : "Turmalina", cp : 29512, localidad : "Benalmádena", provincia : "Málaga"};    //  Dirección 2

// Creación objetos Jugador
const jg1 = new Jugador("Antonio","Benítez Rodríguez","Hombre","+34 659887766",dir1,5);
const jg2 = new Jugador("María","López Torres","Mujer","+34 660765867",dir2,2);
const jg3 = new Jugador("Félix","Sánchez Trujillo","No binario","+34 985454554",dir1,1);

// Creación objetos Equipo
const equipo1 : Equipo = {jugador1 : jg1, jugador2 : jg2}
const equipo2 : Equipo = {jugador1 : jg2, jugador2 : jg3}
const equipo3 : Equipo = {jugador1 : jg3, jugador2 : jg1}

// Creación objetos Arbitro
const arbitro1 = new Arbitro("Marcos","García Pilar","Hombre","+34 675867665",dir2,23214);
const arbitro2 = new Arbitro("Pilar","Milagros Gómez","Mujer","+34 987564534",dir1,54232);

// Creación objetos Date
const date1 = new Date();
const date2 = new Date(2015,10,28);
const date3 = new Date(2024,3,15);

// Creación objetos Set
const set1 : Set = {puntos1: 5,puntos2: 10};
const set2 : Set = {puntos1: 10,puntos2: 2};
const set3 : Set = {puntos1: 7,puntos2: 5};
const set4 : Set = {puntos1: 10,puntos2: 7};
const set5 : Set = {puntos1: 3,puntos2: 5};

// Creación objetos Partido
const partido1 = new Partido(equipo1,equipo3,date1,15,"Torrejarral",3,arbitro1,[set1,set2,set3]);
const partido2 = new Partido(equipo2,equipo3,date3,20,"Cruz Norte",1,arbitro1,[set3,set4]);
const partido3 = new Partido(equipo3,equipo1,date2,18,"Marcalara",2,arbitro2,[set2,set5,set4,set1]);

//* PROGRAMA                            -----------------------------------------------------

var calendario = [partido1,partido2,partido3];
console.info(calendario);
calendario.forEach((partido) => {
    console.log(partido.getWinner())
})

