// arrow function
const felizNatal = () => console.log('Feliz Natal!');
felizNatal()

const saudacao = (nome) => `Fala ${nome}, blz!?`
console.log(saudacao('Maria'));

const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }

    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5))
console.log(somar(1, 2, 3, 4, 5, 6, 7))