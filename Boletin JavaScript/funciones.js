function calcularEsfera() {
    let radio = parseFloat(document.getElementById("radio").value);

    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, introduce un radio válido.");
        return;
    }

    let area = 4 * Math.PI * Math.pow(radio, 2);

    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    document.getElementById("area").textContent = `Área: ${area.toFixed(2)}`;
    document.getElementById("volumen").textContent = `Volumen: ${volumen.toFixed(2)}`;
}

function calcularAbsoluto() {
    let numero = parseFloat(document.getElementById("numero").value);

    let valorAbsoluto;
    
    if (numero < 0) {
        valorAbsoluto = -numero;
    } else {
        valorAbsoluto = numero;
    }

    document.getElementById("resultado").textContent = `Valor absoluto: ${valorAbsoluto}`;
}

function calcularInverso() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (numero === 0) {
        document.getElementById("resultado").textContent = "Error: no se puede calcular el inverso de 0.";
    } else {
        let inverso = 1 / numero;
        document.getElementById("resultado").textContent = `El inverso de ${numero} es: ${inverso}`;
    }
}

function determinarSaludo() {
    let hora = parseInt(document.getElementById("hora").value);
    let minutos = parseInt(document.getElementById("minutos").value);

    if (isNaN(hora) || isNaN(minutos) || hora < 0 || hora > 23 || minutos < 0 || minutos > 59) {
        document.getElementById("resultado").textContent = "Por favor, introduce una hora y minutos válidos.";
        return;
    }

    let mensaje = "";

    if ((hora > 7 || (hora === 7 && minutos >= 30)) && (hora < 14 || (hora === 14 && minutos === 0))) {
        mensaje = "Buenos días";
    }
    else if ((hora > 14 || (hora === 14 && minutos > 0)) && (hora < 20 || (hora === 20 && minutos <= 30))) {
        mensaje = "Buenas tardes";
    }
    else {
        mensaje = "Buenas noches";
    }

    document.getElementById("resultado").textContent = mensaje;
}

function verificarBisiesto() {
    let anio = parseInt(document.getElementById("anio").value);

    let esBisiesto;

    if ((anio % 400 === 0) || (anio % 4 === 0 && anio % 100 !== 0)) {
        esBisiesto = true;
    } else {
        esBisiesto = false;
    }

    if (esBisiesto) {
        document.getElementById("resultado").textContent = `El año ${anio} es bisiesto.`;
    } else {
        document.getElementById("resultado").textContent = `El año ${anio} no es bisiesto.`;
    }
}

function determinarCuadrante() {
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);

    let mensaje = "";

    if (x === 0 && y === 0) {
        mensaje = "El punto está en el origen.";
    } else if (x === 0 && y !== 0) {
        mensaje = "El punto está sobre el eje Y.";
    } else if (x !== 0 && y === 0) {
        mensaje = "El punto está sobre el eje X.";
    } else if (x > 0 && y > 0) {
        mensaje = "El punto está en el primer cuadrante.";
    } else if (x < 0 && y > 0) {
        mensaje = "El punto está en el segundo cuadrante.";
    } else if (x < 0 && y < 0) {
        mensaje = "El punto está en el tercer cuadrante.";
    } else if (x > 0 && y < 0) {
        mensaje = "El punto está en el cuarto cuadrante.";
    }

    document.getElementById("resultado").textContent = mensaje;
}

function mostrarNumeros() {
    let n = parseInt(document.getElementById("n").value);

    let sumaNumeros = 0;
    let sumaCuadrados = 0;
    let sumaCubos = 0;

    let resultado = "<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= n; i++) {
        let cuadrado = i * i;
        let cubo = i * i * i;

        resultado += `<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`;

        sumaNumeros += i;
        sumaCuadrados += cuadrado;
        sumaCubos += cubo;
    }

    resultado += "</table>";
    resultado += `<p>Suma de los números: ${sumaNumeros}</p>`;
    resultado += `<p>Suma de los cuadrados: ${sumaCuadrados}</p>`;
    resultado += `<p>Suma de los cubos: ${sumaCubos}</p>`;

    document.getElementById("resultado").innerHTML = resultado;
}

// Variables globales para almacenar los números, suma, menor y mayor
let numeros = [];
let suma = 0;
let menor = Infinity;
let mayor = -Infinity;
let contador = 0;

function procesarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (numero < 0) {
        document.getElementById("resultado").innerHTML = "Se ha finalizado la entrada de números.";
        return;
    }

    if (numero >= 0) {
        numeros.push(numero);
        suma += numero;
        contador++;
        
        if (numero < menor) menor = numero;
        if (numero > mayor) mayor = numero;

        document.getElementById("resultado").innerHTML = `Número ${numero} agregado.`;
    }
}

function calcularResultados() {
    if (contador === 0) {
        document.getElementById("resultado").innerHTML = "No se ingresaron números.";
        return;
    }

    let media = suma / contador;

    document.getElementById("resultado").innerHTML = 
        `Menor: ${menor}<br>Mayor: ${mayor}<br>Media: ${media.toFixed(2)}`;
}

function convertirMoneda() {
    let euros = parseFloat(document.getElementById("euros").value);
    let moneda = document.getElementById("moneda").value;
    let resultado = 0;
    
    if (isNaN(euros) || euros <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce una cantidad válida de euros.";
        return;
    }

    const tasas = {
        USD: 1.10,  // 1 euro = 1.10 dólares
        GBP: 0.85,  // 1 euro = 0.85 libras
        JPY: 130.12,  // 1 euro = 130.12 yenes
        CHF: 1.05,  // 1 euro = 1.05 francos suizos
        NOK: 10.5   // 1 euro = 10.5 coronas noruegas
    };

    resultado = euros * tasas[moneda];
    
    let simboloMoneda = "";
    switch (moneda) {
        case 'USD': simboloMoneda = '$'; break;
        case 'GBP': simboloMoneda = '£'; break;
        case 'JPY': simboloMoneda = '¥'; break;
        case 'CHF': simboloMoneda = 'CHF'; break;
        case 'NOK': simboloMoneda = 'kr'; break;
    }

    document.getElementById("resultado").innerHTML = `${euros} euros son ${resultado.toFixed(2)} ${simboloMoneda}.`;
}

function reiniciar() {
    document.getElementById("euros").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("moneda").value = "USD";  // Volver al valor predeterminado
}

function salir() {
    document.getElementById("resultado").innerHTML = "Gracias por usar el conversor de monedas. ¡Hasta luego!";
    document.getElementById("euros").disabled = true;
    document.getElementById("moneda").disabled = true;
}

function mostrarMes() {
    let numeroMes = parseInt(document.getElementById("numeroMes").value);
    let nombreMes = '';

    switch (numeroMes) {
        case 1: nombreMes = "Enero"; break;
        case 2: nombreMes = "Febrero"; break;
        case 3: nombreMes = "Marzo"; break;
        case 4: nombreMes = "Abril"; break;
        case 5: nombreMes = "Mayo"; break;
        case 6: nombreMes = "Junio"; break;
        case 7: nombreMes = "Julio"; break;
        case 8: nombreMes = "Agosto"; break;
        case 9: nombreMes = "Septiembre"; break;
        case 10: nombreMes = "Octubre"; break;
        case 11: nombreMes = "Noviembre"; break;
        case 12: nombreMes = "Diciembre"; break;
        default: nombreMes = "Número de mes inválido"; break;
    }

    document.getElementById("resultado").innerHTML = nombreMes;
}

function mostrarCalificacion() {
    let nota = parseFloat(document.getElementById("nota").value);
    let calificacion = "";

    if (isNaN(nota) || nota < 0 || nota > 10) {
        calificacion = "Nota inválida. Por favor, introduce un valor entre 0 y 10.";
    } else if (nota < 5) {
        calificacion = "SUSPENSO";
    } else if (nota >= 5 && nota < 6) {
        calificacion = "APROBADO";
    } else if (nota >= 6 && nota < 7) {
        calificacion = "BIEN";
    } else if (nota >= 7 && nota < 9) {
        calificacion = "NOTABLE";
    } else if (nota >= 9 && nota <= 10) {
        calificacion = "SOBRESALIENTE";
    }

    document.getElementById("resultado").innerHTML = calificacion;
}

function iniciarProceso() {
    let hombresSuma = 0, mujeresSuma = 0;
    let hombresContador = 0, mujeresContador = 0;
    let continuar = true;

    while (continuar) {
        let sexo = prompt("Introduce el sexo del trabajador (H para hombre, M para mujer, * para terminar):").toUpperCase();

        if (sexo === '*') {
            continuar = false;
            break;
        }
        if (sexo !== 'H' && sexo !== 'M') {
            alert("Error: Debes introducir H (hombre) o M (mujer).");
            continue; 
        }

        let sueldo = parseFloat(prompt("Introduce el sueldo (entre 1000 y 2000 euros):"));

        if (isNaN(sueldo) || sueldo < 1000 || sueldo > 2000) {
            alert("Error: El sueldo debe estar entre 1000 y 2000 euros.");
            continue;  
        }

        if (sexo === 'H') {
            hombresSuma += sueldo;
            hombresContador++;
        } else if (sexo === 'M') {
            mujeresSuma += sueldo;
            mujeresContador++;
        }
    }

    let hombresMedia = (hombresContador > 0) ? (hombresSuma / hombresContador).toFixed(2) : "Sin datos";
    let mujeresMedia = (mujeresContador > 0) ? (mujeresSuma / mujeresContador).toFixed(2) : "Sin datos";

    document.getElementById("resultados").innerHTML = `
        <strong>Resultados:</strong><br>
        Media de ingresos para hombres: ${hombresMedia} euros.<br>
        Media de ingresos para mujeres: ${mujeresMedia} euros.
    `;

    if (confirm("¿Deseas repetir el proceso?")) {
        iniciarProceso();
    } else {
        alert("Gracias por usar el programa.");
    }
}

function compararFechas() {
    let dia1 = parseInt(document.getElementById("dia1").value);
    let mes1 = parseInt(document.getElementById("mes1").value);
    let anio1 = parseInt(document.getElementById("anio1").value);

    let dia2 = parseInt(document.getElementById("dia2").value);
    let mes2 = parseInt(document.getElementById("mes2").value);
    let anio2 = parseInt(document.getElementById("anio2").value);

    let resultado = "";

    if (anio1 < anio2) {
        resultado = "La primera fecha es anterior.";
    } else if (anio1 > anio2) {
        resultado = "La segunda fecha es anterior.";
    } else {
        if (mes1 < mes2) {
            resultado = "La primera fecha es anterior.";
        } else if (mes1 > mes2) {
            resultado = "La segunda fecha es anterior.";
        } else {
            if (dia1 < dia2) {
                resultado = "La primera fecha es anterior.";
            } else if (dia1 > dia2) {
                resultado = "La segunda fecha es anterior.";
            } else {
                resultado = "Las dos fechas son iguales.";
            }
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function convertirTiempo() {
    let segundos = parseInt(document.getElementById("segundos").value);

    if (isNaN(segundos) || segundos < 0) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce un número válido de segundos.";
        return;
    }

    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;

    document.getElementById("resultado").innerHTML = `${horas} horas, ${minutos} minutos, ${segundosRestantes} segundos.`;
}

function jugar() {
    let bolita = Math.floor(Math.random() * 3) + 1;

    let eleccionUsuario = parseInt(document.getElementById("cubilete").value);

    if (isNaN(eleccionUsuario) || eleccionUsuario < 1 || eleccionUsuario > 3) {
        document.getElementById("resultado").innerHTML = "Por favor, elige un cubilete válido entre 1, 2 o 3.";
        return;
    }

    if (eleccionUsuario === bolita) {
        document.getElementById("resultado").innerHTML = "¡Felicidades! Has encontrado la bolita en el cubilete " + bolita + ".";
    } else {
        document.getElementById("resultado").innerHTML = "Lo siento, la bolita estaba en el cubilete " + bolita + ".";
    }

    if (confirm("¿Quieres jugar de nuevo?")) {
        document.getElementById("cubilete").value = "";  // Limpiar la entrada
        document.getElementById("resultado").innerHTML = "";  // Limpiar el resultado
    } else {
        alert("Gracias por jugar.");
    }
}













