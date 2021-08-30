class Pessoa {
    constructor (nome, idade, cnh){
        this.nome = nome
        this.idade = idade
        this.cnh = cnh
    }

    dirigir () {
        console.log(`Essa pessoa pode dirigir com a CNH número ${this.CNH}`)
    }

    dormir () {
        console.log(`Essa pessoa dormiu na vida por ${this.idade}.`)
    }

    comer () {
        console.log(`A ${this.nome} ama comer!`)
    }
    
}

const p1 = new Pessoa ('Letícia', '23', 564981315648)

console.log(p1)

p1.dirigir()
p1.dormir()
p1.comer()