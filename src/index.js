import { clear } from "./clear.js";
import "./styles.css";
import { homeLoader } from "./home.js";
import { menuLoader } from "./menu.js";
import { aboutLoader } from "./about.js";
import { contactLoader } from "./contact.js";
export const content = document.querySelector("#content");
const homebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const aboutbtn = document.querySelector("#about");
const contactbtn = document.querySelector("#contact");

homeLoader();

homebtn.addEventListener("click", () => {
    clear();
    homeLoader();
});

menubtn.addEventListener("click", () => {
    clear();
    menuLoader();
});

aboutbtn.addEventListener("click", () => {
    clear();
    aboutLoader();
})

contactbtn.addEventListener("click", () => {
    clear();
    contactLoader();
});
