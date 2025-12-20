import NumberItem from "./NumberItem.js";

const NumbersSection = () => {
  return React.createElement(
    "section",
    { className: "numbers-section" },
    [
      React.createElement(NumberItem, {
        value: "12,000+",
        label: "Hours of play weekly"
      }),

      React.createElement(NumberItem, {
        value: "89%",
        label: "Player retention rate"
      }),

      React.createElement(NumberItem, {
        value: "1,200+",
        label: "Active members"
      }),

      React.createElement(NumberItem, {
        value: "125+",
        label: "Annual tournaments"
      })
    ]
  );
};

export default NumbersSection;
