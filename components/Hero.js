import HeroText from "./HeroText.js";
import HeroImage from "./HeroImage.js";

const Hero = () => {
  return React.createElement(
    "section",
    { className: "hero" },
    [
      React.createElement(HeroText),
      React.createElement(HeroImage)
    ]
  );
};

export default Hero;
