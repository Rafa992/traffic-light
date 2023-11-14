function randColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(randColor());


function randDeg() {
    return Math.floor(Math.random() * 361)
}

let card = document.querySelectorAll(".card")
let card_2 = document.querySelectorAll(".card_2")


// linear-gradient(360deg, rgb(83, 11, 250), rgb(83, 11, 250))

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
        card[i].style.background = randColor()
    })
    card_2[i].addEventListener("click", function () {
        card_2[i].style.background = `linear-gradient(${randDeg()}deg, ${randColor()}, ${randColor()})`
    })
}


// Домашнее задание

let item = document.querySelectorAll(".item")

for (let i = 0; i < item.length; i++) {

    item[i].style.background = item[i].getAttribute("data-bg")

    item[i].addEventListener("click", function () {
        body.style.background = item[i].getAttribute("data-bg")
    })
}