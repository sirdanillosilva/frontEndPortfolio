
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