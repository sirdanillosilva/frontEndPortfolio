// Carne - 400gr Por pessoa, se o churrasco passar de 6 horas de duração será 650gr
// Cerveja - 1,2L Por pessoa, se o churrasco passar de 6 horas de duração será 2L
// Bebidas - 1L Por pessoa, se o churrasco passar de 6 horas de duração será 1,5L
// Crianças valem por 0.5 pessoa
var windowHeight = window.innerHeight
var screenCalc = (windowHeight + 100).toString()
var screen = screenCalc+'px'


function barbecueCalculator() {
    document.getElementById('body').style.height = screen
    let inAdult = document.getElementById('inAdult')
    let adult = Number(inAdult.value)

    let inKids = document.getElementById('inKids')
    let kids = Number(inKids.value)

    let inHour = document.getElementById('inHour')
    let hour = Number(inHour.value)

    let outInformation = document.getElementById('outInformation')

    let qntCarne = 0
    let qntCerveja = 0
    let qntBebida = 0

    //Verificando se o usuário digitou as informações nos campos
    if (adult == '') {
        alert('Digite o valor de quantos adultos vão participar da festa!')
        inAdult.focus()
        return
    }

    if (kids == '') {
        alert('Digite o valor de quantas crianças vão participar da festa!')
        inKids.focus()
        return
    }

    if (hour == '') {
        alert('Digite o valor de quantos horas será a duração da sua festa!')
        inHour.focus()
        return
    }

    if (hour < 6) {
        qntCarne = 0.4 * (adult + 0.5 * kids)
        qntBebida = 1 * (adult + 0.5 * kids)
        qntCerveja = 1.2 * (adult)
    } else {
        qntCarne = 0.65 * (adult + 0.5 * kids)
        qntBebida = 1.5 * (adult + 0.5 * kids)
        qntCerveja = 2 * (adult)
    }

    if (qntCarne < 1) {
        outInformation.innerHTML = ` <div><h3>Você vai precisar de:</h3><div>
                                 <div><img src="./assets/img/meat.png" alt="picanha"><p>${qntCarne.toFixed(2) * 1000}gr de Carne<div>
                                 <div><img src="./assets/img/beer.png" alt="copo de chop"><p>${qntCerveja.toFixed(2)}L de Cerveja<div>  
                                 <div><img src="./assets/img/soda.png" alt="lata de refrigerante"><p>${qntBebida.toFixed(2)}L de Bebida<div>
    `
    } else {
        outInformation.innerHTML = ` <div><h3>Você vai precisar de:</h3><div>
                                 <div><img src="./assets/img/meat.png" alt="picanha"><p>${qntCarne.toFixed(2)}kg de Carne<div>
                                 <div><img src="./assets/img/beer.png" alt="copo de chop"><p>${qntCerveja.toFixed(2)}L de Cerveja<div>  
                                 <div><img src="./assets/img/soda.png" alt="lata de refrigerante"><p>${qntBebida.toFixed(2)}L de Bebida<div>
    `}

    btCalculator.disabled = 'true'
    btTryAgain.className = 'show'



}


function tryAgain() {
    location.reload()
}



let btCalculator = document.getElementById('btCalculator')
btCalculator.addEventListener('click', barbecueCalculator)

let btTryAgain = document.getElementById('btTryAgain')
btTryAgain.addEventListener('click', tryAgain)