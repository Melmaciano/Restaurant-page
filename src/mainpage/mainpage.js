import stew from "./assets/stew.jpg";
import "./mainpage.css";
export { mainPage };

function mainPage() {
    // Content  
    const content = document.createElement("div");
    content.classList.add("welcome");

    // Headline
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Best Restaurant";

    // Image container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = stew;

    const source = document.createElement("p");
    source.classList.add("source");

    const linkProfile = document.createElement("a");
    linkProfile.href = "https://unsplash.com/@foodistika?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
    linkProfile.target = "_blank";
    linkProfile.rel = "noreferrer noopener";
    linkProfile.textContent = "Elena Leya";

    const linkPhoto = document.createElement("a");
    linkPhoto.href = "https://unsplash.com/photos/two-bowls-of-soup-on-a-table-with-crackers-_jyB1ndDFQE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
    linkPhoto.target = "_blank";
    linkPhoto.rel = "noreferrer noopener";
    linkPhoto.textContent = "Unsplash";

    source.appendChild(document.createTextNode("Photo by "));
    source.appendChild(linkProfile);
    source.appendChild(document.createTextNode(" on "));
    source.appendChild(linkPhoto);

    imageContainer.appendChild(image);
    imageContainer.appendChild(source);

    // Description
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = `Welcome to our restaurant, feel free to explore the menu`;

    // Append all inside content
    [headline, imageContainer, description].forEach(elem => content.appendChild(elem));

    return content;
}
