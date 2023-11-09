const pi = 3.14

function sumar(x1,x2){
    return x1 + x2
}

function restar(x1,x2){
    return x1 - x2
}

function dividir(x1,x2){
    if (x2==0){
        mostrarErrorDvision()
    }
    else{
        return x1 / x2
    }
}

function mostrarErrorDvision(){
    console.log('No se puede dividir por cero')
}

exports.sumar = sumar
exports.restar = restar
exports.dividir = dividir
exports.pi = pi
