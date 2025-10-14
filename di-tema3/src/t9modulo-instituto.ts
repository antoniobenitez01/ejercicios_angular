/*
 *  ======== IMPORTANDO Y EXPORTANDO - Instituto ========
 *  Archivo que almacena las diferentes interfaces que vamos
 *  a utilizar a continuación en otro archivo para crear objetos
*/
export enum TipoEnsenanza { // TIPO ENSENANZA - Enumerado que representa los tipos de Enseñanza
    Manana,
    Tarde,
    Telematico
};
// DIRECCION - Interfaz que representa una dirección completa
export interface Direccion {
    calle: string,                              // Nombre de Calle
    cp: number,                                 // Código Postal
    localidad: string,                          // Localidad
    provincia: string                           // Provincia
};
// ENSENANZA - Interfaz que representa la enseñanza de un Alumno
export interface Ensenanza {
    nivel: string,                              // Nivel de Enseñanza (String)
    obligatoria: boolean,                       // True si la Enseñanza es obligatoria
    fp?: string,                                // Nombre de Formación Profesional (opcional)
    tipo: TipoEnsenanza                         // Tipo de Ensenanza via un Enum
};
// ALUMNO - Interfaz que representa un Alumno con sus datos y enseñanza
export interface Alumno {
    nombre: string,                             // Nombre
    edad: number,                               // Edad
    sexo: string,                               // Sexo (String)
    ensenanza: Ensenanza,                       // Objeto Enseñanza
    direccion: Direccion                        // Objeto Dirección
};
// INSTITUTO - Interfaz que representa un instituto con alumnos y funciones
export interface Instituto {
    nombre: string,                             // Nombre del Instituto
    director: string,                           // Nombre del Director
    telefono: number,                           // Teléfono
    correo: string,                             // Correo
    direccion: Direccion,                       // Objeto Dirección
    listado: Alumno[],                          // Array de objetos Alumno 
    anadirAlumno: (alumno: Alumno) => void,     // AÑADIR ALUMNO - Añade un objeto Alumno al listado de objetos Alumno
    mostrarAlumnos: () => void,                 // MOSTRAR ALUMNOS - Muestra todos los objetos Alumno del listado        
    direccionInstituto: () => void              // DIRECCION INSTITUTO - Muestra los datos del objeto Dirección    
};