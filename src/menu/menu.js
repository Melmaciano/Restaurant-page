import "./menu.css";
export { menuPage };

// MENU PAGE
function menuPage() {
    // Menu dishes
    const dishes = [
        {
            name: "Classic Beef Stew",
            description: `A comforting stew made with tender beef chunks simmered 
                          slowly with potatoes, carrots, peas, and a rich tomato 
                          and spice sauce. Perfect for a hearty and nourishing dinner.`,
            id: 1,
        },
        {
            name: "Lemon Herb Roast Chicken",
            description: `Chicken thighs marinated in fresh lemon juice, garlic, 
                          thyme, and rosemary, then baked to crispy, golden perfection. 
                          Served with a side of roasted potatoes and steamed vegetables.`,
            id: 2,
        },
        {
            name: "Eggplant Lasagna",
            description: `A pasta-free lasagna where layers of roasted eggplant are 
                          alternated with rich tomato sauce, seasoned ground meat, 
                          and plenty of mozzarella cheese. A delicious and slightly 
                          lighter twist on traditional lasagna.`,
            id: 3,
        },
        {
            name: "Lentil Vegetable Soup",
            description: `A hearty and healthy soup made with lentils cooked slowly 
                          in a vegetable broth with carrots, celery, onion, and fresh 
                          spinach. Perfect for cold days.`,
            id: 4,
        }
    ];

    // Content container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("menu-container");

    // Menu
    const menu = document.createElement("div");
    menu.classList.add("menu");

    // Displacement
    let displacement = 0;
    menu.scrollTo(0, 0);

    const scrollLeftButton = document.createElement("button");
    scrollLeftButton.disabled = true
    scrollLeftButton.textContent = "<-";
    scrollLeftButton.classList.add("scroll-left-button");
    scrollLeftButton.onclick = () => {
        menu.scrollBy({
            left: -480,
            behavior: "smooth"
        });
        
        if (displacement > 0) {
            displacement--;
            bar.value--;
        };

        if (displacement === 0) scrollLeftButton.disabled = true;
        scrollRightButton.disabled = false;
    }

    const scrollRightButton = document.createElement("button");
    scrollRightButton.textContent = "->";
    scrollRightButton.classList.add("scroll-right-button");
    scrollRightButton.onclick = () => { 
        menu.scrollBy({
            left: 480,
            behavior: "smooth"
        })

        if (displacement < dishes.length) {
            displacement++;
            bar.value++;
        };

        if (displacement === (dishes.length - 1)) scrollRightButton.disabled = true;
        scrollLeftButton.disabled = false
    }

    // Progress bar

    const bar = document.createElement("progress");
    bar.classList.add("progress-bar");
    bar.max = dishes.length - 1;
    bar.value = displacement;

    // Dishes
    dishes.forEach(dish => {
        const dishContainer = menuDish(dish);
        menu.appendChild(dishContainer);
    });

    [menu, scrollLeftButton, scrollRightButton, bar].forEach(elem => contentContainer.appendChild(elem));
    return contentContainer;
}

// MENU CREATION
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
