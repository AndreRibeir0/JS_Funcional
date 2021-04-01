// somar(3)(4)(5)

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

const somar = function (v1) {
    return function (v2) {
        return function (v3) {
            return v1 + v2 + v3
        }
    }
}

const somarArrowFunction = (v1) => (v2) => (v3) => v1 + v2 + v3

console.log(somar(3)(4)(5));
console.log(somarArrowFunction(3)(4)(5));

const multiplicar = (v1, v2) => v1 * v2
const somarF = (v1, v2) => v1 + v2
const subtrair = (v1, v2) => v1 - v2

const calcular = function (v1) {
    return function (v2) {
        return function (fn) {
            return fn(v1, v2)
        }
    }
}

const calcularArrowFunction = (v1) => (v2) => (fn) => fn(v1, v2)

console.log('calcular', calcular(3)(7)(multiplicar));
console.log('calcular', calcular(3)(7)(somarF));
console.log('calcular', calcular(3)(7)(subtrair));

console.log('calcularArrowFunction', calcularArrowFunction(3)(7)(multiplicar));
console.log('calcularArrowFunction', calcularArrowFunction(3)(7)(somarF));
console.log('calcularArrowFunction', calcularArrowFunction(3)(7)(subtrair));
