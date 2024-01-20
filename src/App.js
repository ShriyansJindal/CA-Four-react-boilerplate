import React, { useState } from "react";
import "./App.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Startbox } from "./components/Startbox";

function App() {
  // FOR CHANGING THE THEME
  const [theme,setTheme] = useState(true)

  const background={
    backgroundColor :theme? "#d5dbf3" : "#222831",
    color:theme?"black" : "white",
    width:"100vw",
    height:"100vh"
  }
  // let handleTheme=()=>{
  //   setTheme(!theme)
  // }
  return (
    <div style={background} className="container">
      {/* NAVBAR */}
      <div className="header">
      <h1>KALVIUM</h1>
      <button onClick={()=>setTheme(!theme)} className="themeBtn">{theme===true ?(<MdDarkMode />):(<MdOutlineLightMode />)}</button>
      </div>
      <Startbox props={theme}/>
    </div>
  );
}

export default App;