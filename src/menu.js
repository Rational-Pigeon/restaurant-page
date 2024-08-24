import { content } from "./index";
import starter1 from "./images/starter1.webp";
import starter2 from "./images/starter2.webp";
import entree1 from "./images/entree1.webp";
import entree2 from "./images/entree2.webp";
import dessert1 from "./images/dessert1.webp";
import dessert2 from "./images/dessert2.webp";


export function menuLoader() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    content.appendChild(menuContainer);

    // Starters Section
    const startersSection = document.createElement("div");
    startersSection.classList.add("menu-section");
    menuContainer.appendChild(startersSection);

    const startersTitle = document.createElement("h2");
    startersTitle.textContent = "Superposition Starters";
    startersSection.appendChild(startersTitle);

    const starterItems = [
        {
            name: "Entangled Bruschetta",
            description: "Tomatoes and basil existing in perfect harmony on toasted quantum bread.",
            price: "12",
            image: starter1,
        },
        {
            name: "Schrödinger's Soup",
            description: "A soup that's both hot and cold until observed. Served with uncertainty crackers.",
            price: "10",
            image: starter2,
        },
    ];

    starterItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        startersSection.appendChild(menuItem);

        const itemImg = document.createElement("img");
        itemImg.src = item.image;
        itemImg.alt = item.name;
        menuItem.appendChild(itemImg);

        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");
        menuItem.appendChild(itemInfo);

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemInfo.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        itemInfo.appendChild(itemDescription);

        const itemPrice = document.createElement("span");
        itemPrice.textContent = `€${item.price}`;
        itemInfo.appendChild(itemPrice);
    });

    // Entrees Section
    const entreesSection = document.createElement("div");
    entreesSection.classList.add("menu-section");
    menuContainer.appendChild(entreesSection);

    const entreesTitle = document.createElement("h2");
    entreesTitle.textContent = "Parallel Entrees";
    entreesSection.appendChild(entreesTitle);

    const entreeItems = [
        {
            name: "Multiverse Mushroom Risotto",
            description: "Creamy risotto with mushrooms sourced from parallel dimensions.",
            price: "22",
            image: entree1,
        },
        {
            name: "Time-Warped Steak",
            description: "A perfectly cooked steak served before you even order it.",
            price: "28",
            image: entree2,
        },
    ];

    entreeItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        entreesSection.appendChild(menuItem);

        const itemImg = document.createElement("img");
        itemImg.src = item.image;
        itemImg.alt = item.name;
        menuItem.appendChild(itemImg);

        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");
        menuItem.appendChild(itemInfo);

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemInfo.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        itemInfo.appendChild(itemDescription);

        const itemPrice = document.createElement("span");
        itemPrice.textContent = `€${item.price}`;
        itemInfo.appendChild(itemPrice);
    });

    // Desserts Section
    const dessertsSection = document.createElement("div");
    dessertsSection.classList.add("menu-section");
    menuContainer.appendChild(dessertsSection);

    const dessertsTitle = document.createElement("h2");
    dessertsTitle.textContent = "Singularity Desserts";
    dessertsSection.appendChild(dessertsTitle);

    const dessertItems = [
        {
            name: "Quantum Cheesecake",
            description: "A dessert that is both light and rich, existing in multiple states of flavor.",
            price: "12",
            image: dessert1,
        },
        {
            name: "Entropy Chocolate Mousse",
            description: "Decadent mousse that becomes more deliciously disordered with each bite.",
            price: "11",
            image: dessert2,
        },
    ];

    dessertItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        dessertsSection.appendChild(menuItem);

        const itemImg = document.createElement("img");
        itemImg.src = item.image;
        itemImg.alt = item.name;
        menuItem.appendChild(itemImg);

        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");
        menuItem.appendChild(itemInfo);

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemInfo.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        itemInfo.appendChild(itemDescription);

        const itemPrice = document.createElement("span");
        itemPrice.textContent = `€${item.price}`;
        itemInfo.appendChild(itemPrice);
    });
}
