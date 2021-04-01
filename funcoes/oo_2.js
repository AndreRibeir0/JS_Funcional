class Produto {

    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toLocaleUpperCase()
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10, 0.50)
p1.nome = 'caneta'
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000, 0.80)
console.log(p2.preco);
console.log(p2.precoFinal);