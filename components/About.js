const About = () => {
  return React.createElement(
    "section",
    { className: "about-section" },
    [

      // Small label
      React.createElement(
        "span",
        { className: "about-label" },
        "About Horizon"
      ),

      // Description text
      React.createElement(
        "p",
        { className: "about-description" },
        "At Horizon, we don’t just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros."
      ),

      // Cards wrapper
      React.createElement(
        "div",
        { className: "about-cards" },
        [

          // Card 1
          React.createElement(
            "div",
            { className: "about-card dark" },
            [
              React.createElement("h3", null, "Professional hard courts"),
              React.createElement(
                "p",
                null,
                "Tournament-grade lighting & climate control to play in perfect conditions."
              )
            ]
          ),

          // Card 2
          React.createElement(
            "div",
            { className: "about-card blue" },
            [
              React.createElement("h3", null, "Private & Group Lessons"),
              React.createElement(
                "p",
                null,
                "Train with certified coaches through personalized programs."
              )
            ]
          ),

          // Card 3
          React.createElement(
            "div",
            { className: "about-card light" },
            [
              React.createElement("h3", null, "100+ Pro Coaches"),
              React.createElement(
                "p",
                null,
                "Beginner to advanced level training with proven professionals."
              )
            ]
          )

        ]
      )
    ]
  );
};

export default About;
