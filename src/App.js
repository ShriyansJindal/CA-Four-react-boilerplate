import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Startbox } from "./components/Startbox";



function App() {
  // FOR CHANGING THE THEME
  const [theme,setTheme] = useState(true)
  let [start,setStart]=useState(false)
  const background={
    backgroundColor :theme? "#d5dbf3" : "#222831",
    color:theme?"black" : "white",
    width:"100vw",
    height:"100vh"
  }
  let css ={
    backgroundColor :theme?"#a2a8d3" : "#393e46",    
  }
  let handleTheme=()=>{
    setTheme(!theme)
  }
  return (
    <div style={background} className="container">
      {/* NAVBAR */}
      <div className="header">
      <h1>KALVIUM</h1>
      <button onClick={handleTheme} className="themeBtn">{theme===true ?(<MdDarkMode />):(<MdOutlineLightMode />)}</button>
      </div>
      {start ? (<QuestionBox props ={[theme,0]}/>):(<Startbox props={theme}/>)}
      {/* {start ? (<QuestionBox props ={[theme,0]}/>):(<div className="main" style={css}>
        <h1>QuizzGame</h1>
        <button className="start" onClick={()=>setStart(!start)}>Start Game</button>
      </div>)} */}

      {/* <QuestionBox props ={[theme,0]}/> */}
    </div>
  );
}

export default App;