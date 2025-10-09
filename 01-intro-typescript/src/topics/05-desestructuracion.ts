// Detalles de la canción
interface Detalles {
    autor: string,
    anyo: number
}

interface ReproductorAudio {
    volumenAudio : number,
    duracionCancion : number,
    cancion : String,
    detalles : Detalles
}

const reproductorAudio : ReproductorAudio = {
    volumenAudio: 59,
    duracionCancion: 100,
    cancion: "Plastic Beach",
    detalles: {
        autor: "Gorillaz",
        anyo: 2010
    }
}

const nombreCancion = reproductorAudio.cancion;
console.log(nombreCancion);
const {cancion : cancion1} = reproductorAudio;
const {autor : autor1} = reproductorAudio.detalles;
console.log(cancion1);
console.log(autor1);
export {};