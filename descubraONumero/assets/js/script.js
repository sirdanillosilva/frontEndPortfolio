let play = document.getElementById('play')
let menuHelp = document.getElementById('menu-help')
play.addEventListener('click', showPlayMenu)
menuHelp.addEventListener('click', showHelpMenu)


function showPlayMenu() {
    let gameScreen = document.getElementById('game')
    let configScreen = document.getElementById('gear')
    let helpScreen = document.getElementById('help')

    gameScreen.classList.remove('off')
    configScreen.classList.add('off')
    helpScreen.classList.add('off')

}

function showHelpMenu() {
    let gameScreen = document.getElementById('game')
    let configScreen = document.getElementById('gear')
    let helpScreen = document.getElementById('help')

    gameScreen.classList.add('off')
    configScreen.classList.add('off')
    helpScreen.classList.remove('off')
}


// script do jogo
var hide = Math.ceil(100 * (Math.random()))
var betWrongs = []
const COINS = 6


function oneMoreBet() {
    let inNumber = document.getElementById('userBet')
    let number = Number(inNumber.value)

    let outWrong = document.getElementById('outWrong')
    let outCoins = document.getElementById('outChances')
    let outTip = document.getElementById('outTip')

    if (number == '' || number <= 0 || number >= 100 || isNaN(number)) {
        alert('Digite um valor válido...')
        inNumber.focus()
        return
    }

    inNumber.value = ''

    if (number == hide) {
        alert('Parabéns, Você acertou o número!')
        btnBet.disabled = 'true'
        btnTryAgain.className = 'show'
        outTip.textContent = 'Parabéns, o número sorteado foi: ' + hide
        return
    } else {
        if (betWrongs.indexOf(number) >= 0) {
            alert("Você já apostou o número " + number + ". Tente outro...")
        } else {
            betWrongs.push(number)
            var wrongsNumber = betWrongs.length
            outWrong.textContent = 'Erros: ' + wrongsNumber + " (" + betWrongs.join(',') + ")"

            var leftOfCoins = COINS - betWrongs.length
            outCoins.textContent = `Chances: ${leftOfCoins}`
        }
    }

    if (leftOfCoins == 0) {
        alert('Você usou todas as suas chances!')
        btnBet.disabled = 'true'
        btnTryAgain.className = 'show'
        outTip.textContent = `Game Over!! O número sorteado era: ${hide}`
        return
    } else {
        if (number < hide) {
            outTip.textContent = "Dica: Tente um número maior que " + number
        } else {
            outTip.textContent = "Dica: Tente um número menor que " + number
        }

        // var tip = number < sorteado ? "maior" : "menor" 
        // outTip.textContent = "Dica: Tente um número " + tip + " que " + number
    }

}

function tryAgain() {
    location.reload()
}

let btnBet = document.getElementById('btnBet')
btnBet.addEventListener('click', oneMoreBet)

let btnTryAgain = document.getElementById('btnTryAgain')
btnTryAgain.addEventListener('click', tryAgain)
