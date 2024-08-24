import { content } from "./index.js";

export function aboutLoader() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    content.appendChild(aboutContainer);

    const title = document.createElement("h1");
    title.textContent = "About The Quantum Kitchen";
    aboutContainer.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "The Quantum Kitchen is not just a restaurant; it's an experience where the boundaries of science and cuisine blur. Our mission is to serve dishes that challenge your perception of reality, using the principles of quantum mechanics as our inspiration. Whether you're a food lover or a science enthusiast, you'll find something to marvel at in every bite.";
    aboutContainer.appendChild(description);
}
