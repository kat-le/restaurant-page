 import "./home.css"

export default function () {
    const homeContent = document.createElement("div")
    homeContent.className = "home-content"
    homeContent.appendChild(createHero())
    homeContent.appendChild(createHighlights())
    return homeContent
}

function createHero() {
    const heroDiv = document.createElement("div")
    heroDiv.className = "hero-container"

    const leftCol = document.createElement("div")
    leftCol.className = "left-col"
    const heroP = document.createElement("p")
    heroP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const leftImg = document.createElement("div")
    leftImg.className = "left-img"

    const cta = document.createElement("div")
    cta.className = "call-to-action"
    const h1 = document.createElement("h1")
    h1.textContent = "Brunch."
    const par = document.createElement("p")
    par.textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    cta.appendChild(h1)
    cta.appendChild(par)
    leftCol.appendChild(leftImg)
    leftCol.appendChild(cta)

    const rightCol = document.createElement("div")
    rightCol.className = "right-col"

    heroDiv.appendChild(leftCol)
    heroDiv.appendChild(rightCol)
    return heroDiv
}

function createHighlights() {
    const div = document.createElement("div")
    const text = document.createElement("p")
    text.textContent = "More Home Stuff"
    div.appendChild(text)
    return div
}