import banner from "./images/banner.png";
import vibe1 from "./images/vibe1.webp";
import vibe2 from "./images/vibe2.webp";
import { content } from "./index.js";

export function homeLoader() {
    const bannerImg = document.createElement("img");
    bannerImg.src = banner;
    bannerImg.classList.add("banner");
    content.appendChild(bannerImg);

    const homeContainer1 = document.createElement("div");
    homeContainer1.classList.add("home-container");
    content.appendChild(homeContainer1);

    const textCnt = document.createElement("div");
    textCnt.classList.add("text-container");
    homeContainer1.appendChild(textCnt);

    const title1 = document.createElement("h2");
    title1.innerText = "Welcome to The Quantum Kitchen";
    textCnt.appendChild(title1);

    const description = document.createElement("p");
    description.innerHTML = "At The Quantum Kitchen, we believe dining should be as unpredictable as the universe itself. Our revolutionary approach to food defies the laws of classical gastronomy, serving up a multi-dimensional culinary experience that’s equal parts science experiment, performance art, and chaos theory. We’ve taken Schrödinger’s cat, Heisenberg’s uncertainty principle, and a dash of culinary madness, and baked them into a dining adventure that could only exist in a parallel universe—or right here at The Quantum Kitchen.";
    textCnt.appendChild(description);

    const vibe1Img = document.createElement("img");
    vibe1Img.src = vibe1;
    vibe1Img.classList.add("vibe1");
    homeContainer1.appendChild(vibe1Img);

    const homeContainer2 = document.createElement("div");
    homeContainer2.classList.add("home-container");
    content.appendChild(homeContainer2);

    const vibe2Img = document.createElement("img");
    vibe2Img.classList.add("vibe2");
    vibe2Img.src = vibe2;
    homeContainer2.appendChild(vibe2Img);

    const textCnt2 = document.createElement("div");
    textCnt2.classList.add("text-container");
    homeContainer2.appendChild(textCnt2);

    const title2 = document.createElement("h2");
    title2.textContent = "Join Us";
    textCnt2.appendChild(title2);

    const description2 = document.createElement("p");
    description2.textContent = "At The Quantum Kitchen, we promise an experience that transcends the boundaries of traditional dining. Whether you’re a foodie, a science enthusiast, or just someone looking for a meal that challenges the very fabric of reality, our restaurant is the place to be. Come hungry, leave questioning everything you know about the universe.";
    textCnt2.appendChild(description2);
}
