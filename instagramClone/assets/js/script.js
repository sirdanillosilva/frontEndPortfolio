// Slider de photos
var count = 0
var photos = ['./assets/img/mockup-1.png',
    './assets/img/mockup-2.png',
    './assets/img/mockup-3.png',
    './assets/img/mockup-4.png']

setInterval(changePhoto, 5000)


function changePhoto() {
    let img = document.getElementById('mockup')

    if (count > 3) {
        count = 0
    }
    img.src = photos[count]
    count += 1
}

// Verificador do tamanho da senha

btnChecker()
document.getElementById('user').addEventListener('input',btnChecker)
document.getElementById('password').addEventListener('input',btnChecker)

function btnChecker() {
    let user = document.getElementById('user').value
    let pass = document.getElementById('password').value
    let btn = document.getElementById('btnLogIn')

    if (user.length == 0 || pass.length < 6) {
        btn.disabled = true
    }else{
        btn.disabled = false
    }
}




