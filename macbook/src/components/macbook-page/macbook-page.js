import Heading from "../heading/heading.js";
import MacBookImg from "../macbook-img/macbook-page.js";

class MacBookPage {
  render() {
    const heading = new Heading();
    heading.render("macbook");
    const imacbook = new MacBookImg();
    imacbook.render();
  }
}

export default MacBookPage;
