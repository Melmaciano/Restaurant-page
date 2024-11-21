import "./about.css";
export { aboutPage };

function aboutPage() {
    // Container
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    // Title
    const title = document.createElement("p");
    title.textContent = "About us:"
    title.classList.add("title-about");

    // Description
    const descriptionRestaurant = document.createElement("p");
    descriptionRestaurant.textContent = `Our restaurant offers a warm and inviting atmosphere, perfect for 
                                         enjoying a delicious meal with family and friends. Our menu features 
                                         a delightful array of homemade dishes, inspired by traditional recipes 
                                         and crafted with the freshest local ingredients.`
    
    // Contact
    const contact = document.createElement("ul");

    const phone = document.createElement("li");
    const subtitlePhone = document.createElement("span");
    subtitlePhone.textContent = "Number: ";
    phone.appendChild(subtitlePhone);
    phone.appendChild(document.createTextNode("+598 1234 5678"));

    const email = document.createElement("li"); 
    const subtitleEmail = document.createElement("span");
    subtitleEmail.textContent = "Email: ";
    email.appendChild(subtitleEmail);
    email.appendChild(document.createTextNode("contact@mail.com"));

    contact.appendChild(phone);
    contact.appendChild(email);

    // Append content
    aboutContainer.appendChild(title);
    aboutContainer.appendChild(descriptionRestaurant);
    aboutContainer.appendChild(contact);

    return aboutContainer;
}
