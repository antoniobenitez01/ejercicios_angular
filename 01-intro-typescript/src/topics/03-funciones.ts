/*function sumarNumerosSinDefinirNada()
{
    return 2+3;
}*/

function sumarNumerosConTipos(a: number, b: number)
{
    return a+b;
}
const resultado : string = sumarNumerosConTipos(2,3).toString();

const sumarNumerosFlecha = (a:number, b:number): string => {
    return `\nEl resultado es: ${a+b}`;
}
const resultado2 : string = sumarNumerosFlecha(4,7);
console.log(resultado, resultado2);

function multiplicar(num1: number, num2?: number, base:number = 2)
{
    return num1 * base;
}
let resultadoMult = multiplicar(5,6,10);
console.log(resultadoMult);
resultadoMult = multiplicar(5,10);
console.log(resultadoMult);
resultadoMult = multiplicar(5,6);
console.log(resultadoMult);
export{};