isGreen = true

function changeCard() {
    const card = document.querySelector(".card")
    const footer = document.querySelector(".footer img")
    const backgroundImage = isGreen
        ? "url(./assets/bg-blue.svg)"
        : "url(./assets/bg-green.svg)"

    const footerImage = isGreen
    ? "./assets/bg-blue-footer.svg"
    : "./assets/bg-green-footer.svg"
    isGreen = !isGreen
    card.style.backgroundImage = backgroundImage
    footer.setAttribute('src', footerImage)
}