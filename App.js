/**
 * <div id="parent">
 *  <div id="child">
 *     <h1>Hello h1</h1>
 *  <div>
 * </div>
 */

const h1tag = React.createElement("div",{ id : "parent"},
React.createElement("div",{ id : "child"}),
React.createElement("h1",{ id : "some"}, "Hello all, i am from react js")
);



console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(h1tag);


