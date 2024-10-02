function contarNombres() {
    let nombres = [];
    let nombre;
    let totalNombres = 0;
    let nombresConC = 0;
    let nombresConÑ = 0;

    while (true) {
        nombre = prompt("Ingrese un nombre (escriba 'ULTIMO' para finalizar):");
        
        if (nombre.toUpperCase() === "ULTIMO") {
            break;
        }

        // Agregar nombre a la lista
        nombres.push(nombre);
    }

    // Contar nombres
    totalNombres = nombres.length;

    // Contar cuántos empiezan con C y cuántos contienen ñ
    nombres.forEach(nombre => {
        if (nombre.charAt(0).toUpperCase() === 'C') {
            nombresConC++;
        }
        if (nombre.includes('ñ') || nombre.includes('Ñ')) {
            nombresConÑ++;
        }
    });

    // Mostrar resultados en el HTML
    document.getElementById("totalNombres").textContent = "Total de nombres ingresados: " + totalNombres;
    document.getElementById("nombresC").textContent = "Nombres que comienzan con 'C': " + nombresConC;
    document.getElementById("nombresÑ").textContent = "Nombres que contienen 'ñ': " + nombresConÑ;
}