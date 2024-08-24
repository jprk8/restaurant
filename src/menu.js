export { showMenu };
import hotwing from './img/hotwing.png';

class Food {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const rooster = new Food('Rooster Boy', 'our most popular! (50g protein)', 49);
const bonnie = new Food('Bonnie and Cluck', 'for two (100g protein)', 89);
const hungry = new Food('Hungry Hungry Hicken', 'for the whole family (200g protein)', 179);
const chick = new Food('Chick Possible', 'for our young patrons (20g protein)', 25);

const foods = [];
foods.push(rooster);
foods.push(bonnie);
foods.push(hungry);
foods.push(chick);

function showMenu() {
    const content = document.getElementById('content');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'FOOD MENU';
    content.appendChild(menuTitle);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    for (const food of foods) {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const name = document.createElement('div');
        const description = document.createElement('div');
        const price = document.createElement('div');
        name.classList.add('name');
        description.classList.add('description');
        price.classList.add('price');
        name.textContent = food.name;
        description.textContent = food.description;
        price.textContent = food.price;

        item.appendChild(name);
        item.appendChild(description);
        item.appendChild(price);

        menuContainer.appendChild(item);
    }

    // Add rooster boy icon
    const icon = document.createElement('img');
    icon.classList.add('hoticon');
    icon.src = hotwing;
    menuContainer.appendChild(icon);

    // Attach food menu to #content
    content.appendChild(menuContainer);

    const sauceTitle = document.createElement('div');
    sauceTitle.classList.add('menu-title');
    sauceTitle.textContent = 'SAUCES';
    content.appendChild(sauceTitle);

    const sauce1 = document.createElement('span');
    sauce1.classList.add('sauce');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    const sauce2 = document.createElement('span');
    sauce2.classList.add('sauce');

    sauce1.textContent = `Every food item includes a bundle of Roosterbilt's`;
    highlight.textContent = 'Alltaste Flavor Sauces';
    sauce2.textContent = `\nrandomly generated from a proprietary algorithm using
    all possible taste a human tastebud can taste.
    Remember every flavour beans?
    Taste the rainbow.`;

    sauce1.appendChild(highlight);
    sauce1.appendChild(sauce2);
    content.appendChild(sauce1);
}