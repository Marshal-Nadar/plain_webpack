import "./macbook.scss";
import MacImage from "./macbook.jpg";
class MacBook {
  render() {
    const img = document.createElement("img");
    img.src = MacImage;
    img.alt = "mackbook";
    img.classList.add("mac-book");

    const bodyDomElement = document.querySelector("body");
    bodyDomElement.appendChild(img);
  }
}

export default MacBook;
