const numeroMaximo = localStorage.getItem('numeroMaximo')
console.log(numeroMaximo)

const menorValor = 1
const maiorValor = numeroMaximo
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto);

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.textContent  = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.textContent  = maiorValor