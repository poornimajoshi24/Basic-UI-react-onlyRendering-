const NumberItem = (props) => {
  return React.createElement(
    "div",
    { className: "number-item" },
    [
      React.createElement(
        "h3",
        { className: "number-value" },
        props.value
      ),
      React.createElement(
        "p",
        { className: "number-label" },
        props.label
      )
    ]
  );
};

export default NumberItem;
