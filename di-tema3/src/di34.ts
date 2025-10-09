/*
    ----------------------
    Los siguientes métodos estan programados de modo que el segundo parámetro sea opcional,
    si no se introduce el segundo número se inicializará con el mismo valor que el primer número.
    ---------------------
*/
// SUMAR - Recoge dos números por parámetro y devuelve su suma
function sumar(num1 : number, num2 : number = num1)
{
    return num1 + num2;
}
console.log("--- SUMA ---\n",
    "Resultado sumar(5,10) =",sumar(5,10),
    "\n Resulatdo sumar(3) =",sumar(3)
);
// RESTAR - Recoge dos números por parámetro y devuelve su resta
function restar(num1 : number, num2 : number = num1)
{
    return num1 - num2;
}
console.log("--- RESTA ---\n",
    "Resultado restar(10,5) =",restar(10,5),
    "\n Resulatdo restar(3) =",restar(3)
);
// MULTIPLICAR - Recoge dos números por parámetro y devuelve su multiplicación
function multiplicar(num1 : number, num2 : number = num1)
{
    return num1 * num2;
}
console.log("--- MULTIPLICACIÓN ---\n",
    "Resultado multiplicar(5,10) =",multiplicar(10,5),
    "\n Resulatdo multiplicar(3) =",multiplicar(3)
);
// DIVIDIR - Recoge dos números por parámetro y devuelve su división
//! Si se introduce 0 en el segundo parámetro devolverá un mensaje String "No se puede dividir entre cero"
function dividir(num1 : number, num2 : number = num1) : number | string
{
    let resultado : number | string;
    if(num2 == 0)
    {
        resultado = "No se puede dividir entre cero."
    }else
    {
        resultado = num1 / num2;
    }
    return resultado;
}
console.log("--- DIVISIÓN ---\n",
    "Resultado dividir(5,10) =",dividir(10,5),
    "\n Resulatdo dividir(3) =",dividir(3),
    "\n Resultado dividir(10,0) =",dividir(10,0)
);
