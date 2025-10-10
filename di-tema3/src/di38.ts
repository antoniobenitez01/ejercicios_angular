/*
 *  === DESESTRUCTURACIÓN DE ARGUMENTOS ===
 *  En este proyecto, vamos a crear diferentes interfaces y funciones
 *  y vamos a acceder a diferentes datos mediante el uso de la desestructuración en argumentos
*/
// PRODUCTO - Representa un producto con su descripción y precio
interface Producto {
    descripcion: string;                // Descripcion
    precio: number;                     // Precio
}

const telefono: Producto = { // Creamos objeto Producto "telefono"
    descripcion: "iPhone 15 Pro",
    precio: 1000
}

const tablet: Producto = { // Creamos objeto Producto "tablet"
    descripcion: "iPad Air 3",
    precio: 500
}
// CALCULA IMPUESTO OPCIONES - Opciones para calcular el impuesto de varios objetos Producto
interface CalculaImpuestoOpciones {
    impuesto: number;
    productos: Producto[];
}
// -- CALCULA IMPUESTO - Devuelve el impuesto de cada producto en un objeto CalculaImpuestoOpciones
function calculaImpuesto (opciones: CalculaImpuestoOpciones): number[] {
    let total = 0;
    opciones.productos.forEach(producto => {
        total += producto.precio;
    });
    return [total, total * opciones.impuesto];
}

const carritoCompra = [telefono, tablet]; // Array de objetos Producto
const impuesto = 0.21;                    // Variable impuesto 

// DESESTRUCTURACIÓN DE ARGUMENTOS - A continuación vamos a realizar tres tipos diferentes de desestructuración de argumentos
console.log("=== DESESTRUCTURACIÓN DE ARGUMENTOS ===");

// * 1. Cuando recibimos parámetros en las funciones ----------------------------------------------
const resultado1 = calculaImpuesto({impuesto: impuesto, productos: carritoCompra});
console.log("1. Resultado función =",resultado1);

// * 2. Cuando creamos una variable a partir de una función  --------------------------------------
// -- CREAR PRODUCTO - Función que crea un objeto de Producto
function crearProducto (): Producto {
    return {descripcion: "Balón",precio: 100};
}
const {descripcion, precio} = crearProducto();
console.log("2. Descripción =",descripcion,"- Precio =",precio);

// * 3. Cuando vamos a acceder a un dato en alguna estructura de control --------------------------
const [dato1] = calculaImpuesto({impuesto: impuesto, productos: carritoCompra});
const [,dato2] = calculaImpuesto({impuesto: impuesto, productos: carritoCompra});
console.log("3. Primer dato Array =",dato1,"- Segundo dato Array =",dato2);

export{};

