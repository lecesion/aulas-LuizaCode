// caracteristicas = atributos
// ações = metódos

class BombaCombustivel {
    constructor(valorGasolina, capacidade) {
        this.valorGasolina = valorGasolina
        this.capacidade = capacidade
        this.qtdeGasolina = capacidade
    }

    //metodos
    encherBomba(qtdeGasolina) {
        if (qtdeGasolina == this.capacidade) {
            console.log(`Bomba cheia.`)
        } else {
            this.qtdeGasolina = this.capacidade
            console.log('Enchendo a bomba em 3, 2, 1!')
        }
    }

    abastecerCarro(qtdeLitros) {
        if (this.qtdeGasolina >= qtdeLitros) {
            this.qtdeGasolina -= qtdeLitros
            console.log(`Abastecido com sucesso e você vai pagar: R$ ${qtdeLitros * this.valorGasolina}`)
        } else {
            console.log(`Não temos a quantidade de gasolina, temos ${this.qtdeGasolina}`)
        }

    }

    ajustarValor(novoValor) {
        if (novoValor > 0 && typeof (novoValor) == 'number') {
            this.valorGasolina = novoValor;
        } else {
            console.log('Não liberado.')
        }
    }

}

const bomba1 = new BombaCombustivel(10, 50)

// console.log(bomba1.valorGasolina)
// bomba1.ajustarValor(-3);
// console.log(bomba1.valorGasolina)

bomba1.abastecerCarro(20)
bomba1.ajustarValor(5)
bomba1.abastecerCarro(20)
bomba1.abastecerCarro(20)






