const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Caneta', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 0, preco: 19.20 }
]

console.log(carrinho.filter(item => item.qtde > 0).map(item => item.nome))
console.log(carrinho.filter(item => item.nome == "Caneta"))


Array.prototype.meuFilter = function (fn) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray
}

console.log(carrinho.meuFilter(item => item.qtde > 0))

