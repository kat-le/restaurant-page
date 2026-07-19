import "./home.css"
import image from "./restaurant.jpg"

export default function () {

    const hero = document.createElement("img")
    hero.className = "heroImg"
    hero.src = image;

    return hero
    
}