class Produto {

    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this.preco = preco
        this._desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toLocaleUpperCase()
    }

    get precoFinal() {
        return this.preco * (1 - this._desc)
    }
}

    Produto.prototype.log = function () {
        
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function () {
        return this._desc
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}%`
    }
})

const p1 = new Produto('Caneta', 10, 0.50)
p1.nome = 'caneta'
console.log(p1.nome)
p1.log()

const p2 = new Produto('Geladeira', 3000, 0.80)
console.log(p2.preco);
console.log(p2.precoFinal);
console.log(p2.desc);
console.log(p2.descString);