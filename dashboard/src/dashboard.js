const url = window.location.pathname;
console.log("urlurlurl", url);

import NavigationBar from "./components/navigation-bar/navigation-bar";

const naviagationItem = [
  {
    url: "/hello-world-page",
    title: "Hello World Title",
  },
  {
    url: "/macbook-page",
    title: "Mac Book Title",
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(naviagationItem);

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === "/macbook-page") {
  import("MacBookApp/MacBookPage").then((MacBookPageModule) => {
    const MacBookPage = MacBookPageModule.default;
    const macBookPage = new MacBookPage();
    macBookPage.render();
  });
}

// console.log("dashboard");
