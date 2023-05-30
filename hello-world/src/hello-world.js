import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import "./index.scss";
// import addImage from "./add-image";

const heading = new Heading();
heading.render("hello world");
// const heading2 = new Heading();
// heading2.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

// addImage();

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development Mode");
}

// helloWorldButton.doesnotExist();
