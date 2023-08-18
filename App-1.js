import React from "react";
import ReactDOM  from "react-dom";

//React create element 
const h1tag = React.createElement("div",{ id : "parent"},"some text");

//JSX 
//Babel - 

let name = "Teja";
let mobile  = "9666119069"
const jsxdivision = <div id="myid" className="my-div">my name is {name} my mobile number is {mobile}</div>

//React Components

//Everything in React components. 2 ways) 
//1) Class based component (old way)
//2)Function/methods based components ()
//....................Component...................
const userDetailes = {
    username: "Raviteja",
    mobile: "9666119069"

}

const ButtonCOM = () => (
    <input type="text"/>
);
const HeaderComponent = () => (
    <div class="header"><h2>{userDetailes.username}, What's on your mind</h2></div>
);
const ContentComponent = () => (
    <div class="content">
        <h2>The user name: { userDetailes.username }</h2>
        </div>
);
const FooterComponent = () => (
    <div class="footer"><h2>my footer</h2></div>
)

const HomepageComponent = () => (
    <div className="container">
    <HeaderComponent></HeaderComponent>,
    <ContentComponent></ContentComponent>,
    <FooterComponent></FooterComponent>

    </div>
)

console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HomepageComponent/>); //Reactjs element - HTML-Element 


