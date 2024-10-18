/*Escribe una función llamada elMenor que acepte un número variable de parámetros 
y devuelva el parámetro de menor valor pasado a la función.*/

function elMenor(numeros){
    const menor = Math.min(...numeros)
    return {menor};
}
const arrayNumeros=[2,4,-1,-4,8]
const resultado = elMenor(arrayNumeros); 
alert(`El menor número es: ${resultado.menor}`);


