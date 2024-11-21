import "./menu.css";
export { menuPage };

function menuPage() {
    // Menu dishes
    const dishes = [
        {
            name: "Classic Beef Stew",
            description: `A comforting stew made with tender beef chunks simmered 
                          slowly with potatoes, carrots, peas, and a rich tomato 
                          and spice sauce. Perfect for a hearty and nourishing dinner.`
        },
        {
            name: "Lemon Herb Roast Chicken",
            description: `Chicken thighs marinated in fresh lemon juice, garlic, 
                          thyme, and rosemary, then baked to crispy, golden perfection. 
                          Served with a side of roasted potatoes and steamed vegetables.`
        },
        {
            name: "Eggplant Lasagna",
            description: `A pasta-free lasagna where layers of roasted eggplant are 
                          alternated with rich tomato sauce, seasoned ground meat, 
                          and plenty of mozzarella cheese. A delicious and slightly 
                          lighter twist on traditional lasagna.`
        },
        {
            name: "Lentil Vegetable Soup",
            description: `A hearty and healthy soup made with lentils cooked slowly 
                          in a vegetable broth with carrots, celery, onion, and fresh 
                          spinach. Perfect for cold days.`
        }
    ];

    // Menu
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const scrollLeftButton = document.createElement("button");
    scrollLeftButton.textContent = "<-";
    scrollLeftButton.classList.add("scroll-left-button");
    scrollLeftButton.onclick = () => {
        menu.scrollBy({
            left: -500,
            behavior: "smooth"
        });
    }

    const scrollRightButton = document.createElement("button");
    scrollRightButton.textContent = "->";
    scrollRightButton.classList.add("scroll-right-button");
    scrollRightButton.onclick = () => { 
        menu.scrollBy({
            left: 500,
            behavior: "smooth"
        })
    }
    
    const content = document.querySelector("#content");
    content.appendChild(scrollLeftButton);
    content.appendChild(scrollRightButton);

    // Dishes
    dishes.forEach(dish => {
        const dishContainer = menuDish(dish);
        menu.appendChild(dishContainer);
    });

    return menu;
}

function menuDish({ name = "name", image = "source", description = "description" }) {
    // Dish
    const dish = document.createElement("div");
    dish.classList.add("dish");

    // Name
    const dishName = document.createElement("p");
    dishName.classList.add("dish-name");
    dishName.textContent = `${name}`;

    // Image
    const dishImage = document.createElement("img");
    dishImage.classList.add("dish-image");
    dishImage.src = image;

    // Description
    const dishDescription = document.createElement("p");
    dishDescription.classList.add("dish-description");
    dishDescription.textContent = `${description}`;

    // Append all inside content
    [dishName, dishImage, dishDescription].forEach(elem => dish.appendChild(elem));

    return dish;
}
