isGreen = true
isflip = false

function changeCard() {
    const card = document.querySelector(".card")
    const footer = document.querySelector(".footer img")
    const flipper = document.querySelector(".flipper")

    const backgroundImage = isGreen
        ? "url(./assets/bg-blue.svg)"
        : "url(./assets/bg-green.svg)"
 
    const cardFlip = isflip
        ? "rotateY(180deg) scaleX(-1)"
        : "rotateY(0deg) scaleX(1)"
    isflip = !isflip
    flipper.style.transform = cardFlip

    const footerImage = isGreen
    ? "./assets/bg-blue-footer.svg"
    : "./assets/bg-green-footer.svg"
    isGreen = !isGreen
    card.style.backgroundImage = backgroundImage
    footer.setAttribute('src', footerImage)

    
}