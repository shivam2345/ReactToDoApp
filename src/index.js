// Using ReactJS library
import React from "react"
import ReactDOM from "react-dom"

//component files
import TodoContainer from "./components/TodoContainer" //specify relative path from current dir
ReactDOM.render(<TodoContainer />, document.getElementById("root"))
//babel JS compoler
// const element = /*#__PURE__*/React.createElement("p", null, "Hello from Create React App");

const element = <p>Hello from Create React App</p>

ReactDOM.render(element, document.getElementById("root"))

// JavaScript
// window.onload = function init() {
//   document.getElementById("root").innerHTML = "Hello from Create React App";
// }
