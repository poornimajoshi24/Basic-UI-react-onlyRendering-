const Navbar = () => {
  return React.createElement(
    "nav",
    { className: "navbar" },
    [

      // Logo
      React.createElement(
        "div",
        { className: "nav-logo" },
        "Horizon Courts"
      ),

      // Navigation links
      React.createElement(
        "ul",
        { className: "nav-links" },
        [
          React.createElement("li", null, "About Us"),
          React.createElement("li", null, "Services"),
          React.createElement("li", null, "Coaches"),
          React.createElement("li", null, "Events"),
          React.createElement("li", null, "Contacts")
        ]
      ),

      // Button
      React.createElement(
        "button",
        { className: "nav-btn" },
        "Book now"
      )
    ]
  );
};

export default Navbar;
