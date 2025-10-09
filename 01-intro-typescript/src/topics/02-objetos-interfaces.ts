// let habilidades = ["Velocidad","Magia","Curación"];
// let habilidades2 = ["Velocidad","Magia","Curación",true,123];
// let habilidades3 : string[] = ["Velocidad","Magia","Curación"];
// let habilidades4 : (string | boolean | number)[] = ["Velocidad","Magia","Curación",true,123];

/* const personaje = {
    nombre: "Goku",
    pv: 100,
    habilidades: ["Kaioken","Kamehameha"] 
}*/

interface Personaje {
    nombre: string,
    pv: number,
    habilidades: string[],
    procedencia?: string
}

const saiyan : Personaje = {
    nombre: "Vegeta",
    pv: 500,
    habilidades: ["Big Bang Attack","Final Flash"],
    procedencia: "Planeta Vegeta"
}

saiyan.procedencia = "La Tierra";

console.table(saiyan);
export {};