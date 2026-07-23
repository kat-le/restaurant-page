import "./styles.css"
import getHomeContent from "./home/home.js";
import getMenuContent from "./menu/menu.js";
import getAboutContent from "./about/about.js"

const content = document.querySelector("#content");
content.append(getHomeContent())

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.id === "home") {
            content.replaceChildren()
            content.append(getHomeContent())
        } else if (event.target.id === "menu") {
            content.replaceChildren()
            content.append(getMenuContent())
        } else if (event.target.id === "about") {
            content.replaceChildren()
            content.append(getAboutContent())
        }
    })
}) 

