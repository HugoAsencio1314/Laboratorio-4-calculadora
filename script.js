function obtenerNumeros() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        mostrarResultado("Error: Ambos campos deben tener números.");
        return null;
    }

    return [n1, n2];
}

function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerText = "Resultado: " + mensaje;
}

function sumar() {
    const numeros = obtenerNumeros();
    if (numeros) mostrarResultado(numeros[0] + numeros[1]);
}

function restar() {
    const numeros = obtenerNumeros();
    if (numeros) mostrarResultado(numeros[0] - numeros[1]);
}

function multiplicar() {
    const numeros = obtenerNumeros();
    if (numeros) mostrarResultado(numeros[0] * numeros[1]);
}

function dividir() {
    const numeros = obtenerNumeros();
    if (numeros) {
        if (numeros[1] === 0) {
            mostrarResultado("Error: División por cero.");
        } else {
            mostrarResultado(numeros[0] / numeros[1]);
        }
    }
}
