import React from "react";
import ReactDOM from "react-dom/client";
import Vivek from "./App";


// const reactElement= {
//   type: "a",
//   props:{
//       href:'www.google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  "mujhe click karoooooo!!!!!!"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
)

