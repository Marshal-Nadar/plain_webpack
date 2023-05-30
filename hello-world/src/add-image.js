import MacBook from "./mackbook.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "mackbook";
  img.width = 300;
  img.src = MacBook;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
