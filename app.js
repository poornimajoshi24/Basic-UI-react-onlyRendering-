//app that is parent of our page
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Services from "./components/Services.js";

import NumbersSection from "./components/NumbersSection.js";

const App = () => {
  return React.createElement(
    "div",
    null,
    [
      React.createElement(Navbar),
React.createElement(Hero),
React.createElement(About),
React.createElement(NumbersSection),

      React.createElement(NumbersSection)
    ]
  );
};

export default App;



