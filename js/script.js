const buttons = document.querySelectorAll("[atualizar]")
const custom = document.querySelector("#input-custom")
const valorAmount = document.getElementById('valor-amount')
const valorTotal = document.getElementById('valor-total')
const inputBill = document.getElementById('bill')
const inputPeople = document.getElementById('number-people')
let value = ' '

document.querySelector('html').addEventListener("input", calcularGorjeta)

document.getElementById('button-reset').addEventListener('click', resetar)

buttons.forEach(Element => {
    Element.addEventListener('click', mudaStatus)
})

custom.addEventListener("input", adicionarValue)

function mudaStatus(event) {
    buttons.forEach(Element => {
        Element.classList.remove('button-active')
    })
    if (event.target.type != 'number') {
        event.target.classList.add('button-active')
        custom.value = ''
        value = parseFloat(event.target.value)
    }
    calcularGorjeta()
}

function adicionarValue() {
    value = parseFloat(custom.value)
}


function calcularGorjeta() {
    let bill = parseFloat(inputBill.value)
    let people = parseFloat(inputPeople.value)
    let gorjeta = ((bill / 100) * value) / people
    let valor = gorjeta + (bill / people)
    if (!isNaN(valor) && !isNaN(gorjeta) && value != '' ) {
        valorTotal.innerHTML = `$ ${valor.toFixed(2).replace('.', ',')}`
        valorAmount.innerHTML = `$ ${gorjeta.toFixed(2).replace('.', ',')}`
        console.log(value)
    }
}

function resetar() {
    inputBill.value = ""
    inputPeople.value = ''    
    valorTotal.innerHTML= `$0.00`
    valorAmount.innerHTML = `$0.00`
    buttons.forEach(Element => {
        Element.classList.remove('button-active')
    })
    custom.value = ''
}