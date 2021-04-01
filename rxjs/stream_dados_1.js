function gerarNumeros(fn) {
    return {
        iniciar(fn, intervalo = 1000) {
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, intervalo);

            return {
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}

const temp11 = gerarNumeros()
const exec11 = temp11.iniciar(numero => {
    console.log(`#1.1: ${numero * 2}`)
}, 1000)

const temp12 = gerarNumeros()
const exec12 = temp12.iniciar(a => {
    console.log(`#1.2: ${a + 100}`)
}, 500)

const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(a => {
    console.log(`#2: ${a + 100}`)
}, 2000)

setTimeout(() => {
    exec11.parar()
    exec2.parar()
}, 10000)

setTimeout(() => {
    exec12.parar()
}, 12000)