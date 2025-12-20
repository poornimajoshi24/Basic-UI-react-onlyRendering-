import App from './app.js'
const root=ReactDOM.createRoot(document.querySelector("#container"));
//this selects and HTML element that is element with id container and then creates a REACT ROOT 
//this react root is" a place awhere reacr app will be rendered"
//and react root is stored in a varaible called root 
//hence this whole line tells "select an HTML element with id container and make it the root where the React app will be displayed"
root.render(React.createElement(App))
//jisko render karna hai that is app uska element banana padega aur usko render kardenge uss variable mein jo hamara root(jiska naam container ko store kar  raha hai)
//aur uss variable ka naam jo container ko store kar raha hai ROOT he hai
//iske ilava kahin bhi "createRoot" nahi hoga 

console.log("MAIN JS LOADED");
