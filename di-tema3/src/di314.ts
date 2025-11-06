/*
 *  === ENCADENANDO OPCIONALMENTE ===
 *  Aprovechamos la estructura del ejercicio 3.12
 *  para modificarla y hacer uso del encadenamiento opcional
*/

import {Direccion, dir1, dir2, date1, date2, date3, set1, set2, set3, set4, set5} from './di312';

//* MODIFICACION CLASE PERSONA              ----------------------------------------------------

export class Persona{
    public nombre : string;
    public apellidos : string;
    public genero : string;
    public telefono : string;
    public direccion? : Direccion;        // Atributo opcional : Dirección

    constructor(nombre:string,apellidos:string,genero:string,telefono:string,direccion?:Direccion){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

//* MODIFICACIÓN CLASE JUGADOR              ----------------------------------------------------

export class Jugador extends Persona{
    public categoria : number;            // Número categoría

    constructor(nombre:string,apellidos:string,genero:string,telefono:string,categoria:number,direccion?:Direccion){
        super(nombre,apellidos,genero,telefono,direccion)
        this.categoria = categoria;
    }
}

// EQUIPO - Interfaz que representa un equipo con dos objetos Jugador
export interface Equipo {
    jugador1 : Jugador;
    jugador2 : Jugador;
}

//* MODIFICACIÓN CLASE ARBITRO              ----------------------------------------------------

export class Arbitro extends Persona{
    public colegiado : number;            // Número colegiado

    constructor(nombre:string,apellidos:string,genero:string,telefono:string,colegiado:number,direccion?:Direccion){
        super(nombre,apellidos,genero,telefono,direccion)
        this.colegiado = colegiado;
    }
}

//* MODIFICACIÓN CLASE PARTIDO              -----------------------------------------------------

// SET - Interfaz de Set que representa los puntos ganados por cada equipo en un Set
interface Set {
    puntos1 : number;
    puntos2 : number;
}

export class Partido {
    public equipo1 : Equipo;
    public equipo2? : Equipo;
    public fecha : Date;
    public hora : number;
    public recinto : string;
    public pista : number;
    public arbitro : Arbitro;
    public sets : Set[];

    constructor(equipo1 : Equipo,fecha : Date,hora : number,recinto : string,pista : number,arbitro : Arbitro,sets : Set[],equipo2? : Equipo){
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
        let resultado : string = "";
        var total1 = 0;
        var total2 = 0;
        this.sets.forEach((set) => {
            if(set.puntos1 > set.puntos2){
                total1++;
            }else if (set.puntos1 < set.puntos2){
                total2++;
            }
        });
        var strEquipo1 = `${this.equipo1.jugador1.nombre} ${this.equipo1.jugador2.nombre}`
        var strEquipo2 = `${this.equipo2?.jugador2.nombre || "Sin"} ${this.equipo2?.jugador2.nombre || "equipo"}`
        if(total1 == total2){
            resultado = `El equipo ${strEquipo1} ha empatado al equipo ${strEquipo2} por ${total1} sets a ${total2}`;
        }else if(total1 > total2){
            resultado = `El equipo ${strEquipo1} ha ganado al equipo ${strEquipo2} por ${total1} sets a ${total2}`;
        }else{
            resultado = `El equipo ${strEquipo2} ha empatado al equipo ${strEquipo1} por ${total2} sets a ${total1}`;
        }
        return resultado;
    }
}

//* CREACIÓN DE NUEVOS OBJETOS                 -----------------------------------------------------

// Creación nuevos objetos Jugador
const jg1 = new Jugador("Antonio","Benítez Rodríguez","Hombre","+34 659887766",5);
const jg2 = new Jugador("María","López Torres","Mujer","+34 660765867",2,dir2);
const jg3 = new Jugador("Félix","Sánchez Trujillo","No binario","+34 985454554",1);

// Creación nuevos objetos Equipo
const equipo1 : Equipo = {jugador1 : jg1, jugador2 : jg2};
const equipo2 : Equipo = {jugador1 : jg2, jugador2 : jg3};
const equipo3 : Equipo = {jugador1 : jg3, jugador2 : jg1};

// Creación nuevos objetos Arbitro
const arbitro1 = new Arbitro("Marcos","García Pilar","Hombre","+34 675867665",23214,dir1);
const arbitro2 = new Arbitro("Pilar","Milagros Gómez","Mujer","+34 987564534",54232);

// Creación nuevos objetos Partido
const partido1 = new Partido(equipo1,date1,15,"Torrejarral",3,arbitro1,[set1,set2,set3],equipo3);
const partido2 = new Partido(equipo2,date3,20,"Cruz Norte",1,arbitro1,[set3,set4]);
const partido3 = new Partido(equipo3,date2,18,"Marcalara",2,arbitro2,[set2,set5,set4,set1]);

//* PROGRAMA                            -----------------------------------------------------

function imprimirCalendario(calendario : Partido[]): void{
    calendario.forEach((partido) => {
        console.log(`PARTIDO ${emparejamiento(partido)}`);
        console.log(`Fecha: ${partido.fecha}`);
        console.log(`Árbitro: ${partido.arbitro.nombre} - ${partido.arbitro.direccion?.calle || "Sin dirección"}`);
        console.log("");
    });
}

function emparejamiento(partido : Partido): string{
    var strEquipo1 = `${partido.equipo1.jugador1.nombre} ${partido.equipo1.jugador2.nombre}`
    var strEquipo2 = `${partido.equipo2?.jugador2.nombre || "Sin"} ${partido.equipo2?.jugador2.nombre || "equipo"}`
    return strEquipo1 + " : " + strEquipo2;
}

export const calendario = [partido1,partido2,partido3];

imprimirCalendario(calendario);

console.log(partido2.getWinner())