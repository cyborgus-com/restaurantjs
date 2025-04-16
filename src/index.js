import "./styles.css";

import {buildContent} from "./modules.js";
const contentBuilder = new buildContent();

let content = document.querySelector("#content");

let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let about = document.querySelector("#about");

home.addEventListener("click", () => {
    content.innerText = contentBuilder.home();
});

menu.addEventListener("click", () => {
    content.innerText = contentBuilder.menu();
});

about.addEventListener("click", () => {
    content.innerText = contentBuilder.about();
});


content.innerText = contentBuilder.home();