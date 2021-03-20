import React from "react"

//create React class component
class TodoContainer extends React.Component {
  render() //returning the JSX (xml) rendered on screen, this is a component render
  { //component render = no arguments and doesn't interact w/ browser
    return(
      <React.Fragment> //must wrap to return more than one JSX elements
      <h1>Hello from Create React App</h1>
      <p>I am in a React Component!</p>
      </React.Fragment> //virtual element not shown in DOM to avoid <div> redundancy
    )
  }
}
export default TodoContainer

//notes: use UpperCamelCase for Component File Names
