import "./style.css";
import { mainPage } from "./mainpage/mainpage.js";
import { menuPage } from "./menu/menu.js";
import { aboutPage } from "./about/about.js";

const contentContainer = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

updatePage(mainPage);

function updatePage(func) {
    const content = func();
    setTimeout(() => {
        contentContainer.textContent = "";
        contentContainer.appendChild(content);
        contentContainer.style.opacity = 1;
    }, 200);
    contentContainer.style.opacity = 0;
}

homeBtn.addEventListener("click", () => {
    updatePage(mainPage);
});

menuBtn.addEventListener("click", () => {
    updatePage(menuPage);
});

aboutBtn.addEventListener("click", () => {
    updatePage(aboutPage);
});
