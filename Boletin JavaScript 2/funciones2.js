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

function tarot(){
document.getElementById('tarotForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);

    const currentDate = new Date();

    if (birthdate > currentDate) {
        document.getElementById('message').innerText = "La fecha de nacimiento no puede ser mayor que la fecha actual.";
    } else {
        document.getElementById('message').innerText = "Fecha de nacimiento válida.";
    }
});
}

function compararFechas() {
    // Capturar el formulario y escuchar el evento submit
    document.getElementById('fechaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Leer la primera fecha desde el campo de tipo "date"
        let fecha1 = new Date(document.getElementById('fecha1').value);
        
        // Leer la segunda fecha desde el campo de tipo "date"
        let fecha2 = new Date(document.getElementById('fecha2').value);

        // Comparar fechas
        let resultado = document.getElementById('resultado');
        if (fecha1 < fecha2) {
            resultado.innerText = "La Fecha 1 es anterior a la Fecha 2";
        } else if (fecha1 > fecha2) {
            resultado.innerText = "La Fecha 2 es anterior a la Fecha 1";
        } else {
            resultado.innerText = "Ambas fechas son iguales";
        }
    });
}

compararFechas();

function calcularFechas() {
    document.getElementById('fechaForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let fechasInput = document.getElementById('fechas').value;
        let fechasArray = fechasInput.split(',').map(f => new Date(f.trim()));
        fechasArray.sort((a, b) => a - b);

        let fechaMenor = fechasArray[0];
        let fechaMayor = fechasArray[fechasArray.length - 1];

        let diferenciaMilisegundos = fechaMayor - fechaMenor;
        let diferenciaSegundos = diferenciaMilisegundos / 1000;

        document.getElementById('menor').innerText = "Fecha menor: " + fechaMenor.toLocaleDateString();
        document.getElementById('mayor').innerText = "Fecha mayor: " + fechaMayor.toLocaleDateString();
        document.getElementById('diferencia').innerText = "Diferencia en segundos: " + diferenciaSegundos;
    });
}

calcularFechas();


