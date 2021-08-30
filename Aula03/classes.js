class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    
    anunciar (){
        console.log(`Indicando o livro ${this.nome}`)
    }

    qtdePaginas (){
        console.log(`Esse livro tem ${this.paginas}`)
    }
}

const livro1 = new Livro ('Harry Potter', 'Taína Edition', 300)
const livro2 = new Livro ('Extase', 'Lauren Kate Edition', 300)

console.log(livro1)
console.log(livro2)

livro1.anunciar()
livro1.qtdePaginas()

livro2.anunciar()
livro2.qtdePaginas()


