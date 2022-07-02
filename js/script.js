const buttons = document.querySelectorAll("[atualizar]")
const custom = document.querySelector("#input-custom")
let value = 0


document.querySelector('html').addEventListener("input", calcularGorjeta)


buttons.forEach(Element =>{
    Element.addEventListener('click', mudaStatus)
})

function mudaStatus(event){
    buttons.forEach(Element =>{
        Element.classList.remove('button-active')
    })
   if(event.target.type != 'number'){     
       event.target.classList.add('button-active')
       custom.value = '' 
       value = parseInt(event.target.value)
   }else{
    value = 0
   }
   calcularGorjeta()
}




function calcularGorjeta(){
    let bill = parseInt(document.getElementById('bill').value)
    let people = parseInt(document.getElementById('number-people').value)
    console.log(bill + people + value) 
}