import "./styles.css"
import getHomeContent from "./home/home.js";

const content = document.querySelector("#content");
content.append(getHomeContent());