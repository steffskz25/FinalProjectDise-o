var elemento = document.getElementById('pantalla')
var numeros = []
var numAnterior = 0;
var tipoOperacion

function agregar(Param) {
    console.log("he sido presionado")
    numeros.push(Param)
    elemento.innerHTML = numeros.join('')
}
function operacion(Param) {
    numAnterior = parseInt(numeros.join(''));
    numeros = []
    
    switch (Param) {
        case "-":
            tipoOperacion = '-'
            break;
        case "+":
            tipoOperacion = '+'
            break;
        case "*":
            tipoOperacion = '*'
            break;
        case "/":
            tipoOperacion = '/'
            break;
    }
}

function resultado() {
numActual =parseInt(numeros.join(''));
    numeros = []
    var resultado = 0;
    switch (tipoOperacion) {
        case '-':
            resultado = numAnterior - numActual;
            console.log(resultado)
            elemento.innerHTML = resultado;
            break;
        case '+':
            resultado = (numAnterior) + (numActual);
            console.log(resultado)
            elemento.innerHTML = resultado;
            console.log("elemento¨:" + elemento.innerHTML)
            break;
        case '*':
            resultado = numAnterior * numActual;
            console.log(resultado)
            elemento.innerHTML = resultado;
            break;
        case '/':
            resultado = numAnterior / numActual;
            console.log(resultado)
            elemento.innerHTML = resultado;
            break;
            
    }
}

