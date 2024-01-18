import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const [theme,setTheme] = useState(true)
  const [themeName, setThemeName] = useState("Light")

  const background={
    backgroundColor :theme?"#e7eaf6" : "#222831",
    color:theme?"black" : "white",
    width:"100vw",
    height:"100vh"
  }
  
  useEffect(()=>{
    if(themeName=='Dark'){
      setThemeName("Light")
    }
    else{
      setThemeName("Dark")
    }
  },[theme])
  let handleTheme=()=>{
    setTheme(!theme)

  }
  return (
    <div style={background} className="container">
      <div className="header">
      <h1>KALVIUM</h1>
      <button onClick={handleTheme} className="themeBtn">{themeName}</button>
      </div>
      <QuestionBox props ={theme}/>
    </div>
  );
}

export default App;