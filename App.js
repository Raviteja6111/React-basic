import React from "react";
import ReactDOM  from "react-dom";

const h1tag = React.createElement("div",{ id : "parent"},
React.createElement("div",{ id : "child"}),
React.createElement("h1",{ id : "some"}, "Hello all , i am from react js")
);


console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(h1tag);


