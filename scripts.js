
/**
 * Genera una tabla de multiplicar en base a un número y un límite dado.
 */
function generarTabla() {
    /**
     * @type {number}
     * El número ingresado por el usuario.
     */
    var numero = parseInt(document.getElementById("numero").value);

    /**
     * @type {number}
     * El límite ingresado por el usuario.
     */
    var limite = parseInt(document.getElementById("limite").value);

    /**
     * @type {string}
     * El HTML de la tabla generada.
     */
    var tablaHTML = "<h3>Tabla de Multiplicar del " + numero + "</h3><table border='1'><tr><th>Multiplicando</th><th>Producto</th></tr>";

    for (var i = 1; i <= limite; i++) {
        /**
         * @type {number}
         * El producto de la multiplicación.
         */
        var producto = numero * i;
        tablaHTML += "<tr><td>" + numero + " x " + i + "</td><td>" + producto + "</td></tr>";
    }

    tablaHTML += "</table>";
    document.getElementById("tablaMultiplicar").innerHTML = tablaHTML;
}

/**
 * Verifica si un número es primo.
 */
function esPrimo() {
    /**
     * @type {number}
     * El número ingresado por el usuario.
     */
    var numero = parseInt(document.getElementById("numeroPrimo").value);

    /**
     * @type {boolean}
     * Indica si el número es primo o no.
     */
    var esPrimo = true;

    if (numero === 2) {
        esPrimo = true;
    } else if (numero <= 1 || numero % 2 === 0) {
        esPrimo = false;
    } else {
        for (var i = 3; i <= Math.sqrt(numero); i += 2) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    document.getElementById("resultadoPrimo").innerHTML = esPrimo ? numero + " es primo" : numero + " no es primo";
}

/**
 * Calcula el factorial de un número.
 */
function calcularFactorial() {
    /**
     * @type {number}
     * El número ingresado por el usuario.
     */
    var numero = parseInt(document.getElementById("numeroFactorial").value);

    /**
     * @type {number}
     * El factorial del número.
     */
    var factorial = 1;

    for (var i = 2; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultadoFactorial").innerHTML = "Factorial de " + numero + " es " + factorial;
}
