function contarNombres() {
    let totalNombres = 0;
    let nombresC = 0;
    let nombresConEnie = 0;

    while (true) {
        let nombre = prompt("Ingrese un nombre (o escriba 'ULTIMO' para terminar):");

        if (nombre === "ULTIMO") {
            break; 
        }

        totalNombres++;

        if (nombre.charAt(0).toUpperCase() === "C") {
            nombresC++;
        }

        for (let i = 0; i < nombre.length; i++) {
            if (nombre[i] === "ñ" || nombre[i] === "Ñ") {
                nombresConEnie++;
                break; 
            }
        }
    }

    document.getElementById("resultado").innerHTML = `
        <p>Total de nombres leídos: ${totalNombres}</p>
        <p>Nombres que comienzan con "C": ${nombresC}</p>
        <p>Nombres que contienen "ñ": ${nombresConEnie}</p>
    `;
}

function contarNombres() {
    const input = document.getElementById("nombres").value;
    
    const nombres = input.split(',').map(nombre => nombre.trim());

    const totalNombres = nombres.length;

    const nombresConC = nombres.filter(nombre => /^[cC]/.test(nombre)).length;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Total de nombres leídos: ${totalNombres}<br>Nombres que comienzan con 'C': ${nombresConC}`;
}

