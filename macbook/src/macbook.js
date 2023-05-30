import Heading from "./components/heading/heading.js";
import MacBook from "./components/macbook-img/macbook-page.js";

const heading = new Heading();
heading.render("macbook");
const imacbook = new MacBook();
imacbook.render();

// import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
//   console.log("HelloWorldButtonModule", HelloWorldButtonModule);
//   const HelloWorldButton = HelloWorldButtonModule.default;
//   const helloWorldButton = new HelloWorldButton();
//   helloWorldButton.render();
// });
