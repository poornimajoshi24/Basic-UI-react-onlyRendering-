const Services = () => {
  return React.createElement(
    "section",
    { className: "services-section" },
    [
      React.createElement(
        "div",
        { className: "services-cards" },
        [
          // CARD 1
          React.createElement(
            "div",
            { className: "service-card" },
            [
              React.createElement("img", {
                src: "../card1.jpg",
                className: "service-img",
                alt: "Service 1"
              }),
              React.createElement("h3", null, "Professional Coaching"),
              React.createElement(
                "p",
                null,
                "Personalized coaching sessions for beginners to advanced players."
              )
            ]
          ),

          // CARD 2
          React.createElement(
            "div",
            { className: "service-card" },
            [
              React.createElement("img", {
                src: "../card2.png",
                className: "service-img",
                alt: "Service 2"
              }),
              React.createElement("h3", null, "Modern Facilities"),
              React.createElement(
                "p",
                null,
                "Train on world-class courts with premium equipment."
              )
            ]
          )
        ]
      )
    ]
  );
};

export default Services;
