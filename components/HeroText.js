const HeroText=()=>
{
    return React.createElement(
        "div",
        {className:"hero-text"},
        [
        React.createElement("h1",
            null,
            "Unleash Your Inner Champion Today,"),
        React.createElement("p",null,
            "All in one place. Train, play and grow.") ,
        React.createElement("button", null, "Start your journey")
        ]
    );
};
export default HeroText;