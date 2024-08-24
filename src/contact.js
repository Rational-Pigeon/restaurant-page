import { content } from "./index";

export function contactLoader() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    content.appendChild(contactContainer);

    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    contactContainer.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. You can email us at contact@quantumkitchen.com or call us at (123) 456-7890. We look forward to connecting with you!";
    contactContainer.appendChild(description);
}
