function colocaEnMedio(array1, array2) {
    const medio = Math.floor(array1.length / 2);
   
    const resultado = [
        ...array1.slice(0, medio), ...array2, ...array1.slice(medio)
    ];
    
    alert(`Resultado: [${resultado.join(', ')}]`);
    return resultado;
}

colocaEnMedio([1, 2, 6, 7], [3, 4, 5]);

