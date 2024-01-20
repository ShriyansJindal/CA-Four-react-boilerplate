import React, { useState } from 'react'
import QuestionBox from './QuestionBox'

export const Startbox = (props) => {
    let theme = props.props
    let [start,setStart]=useState(false)
    let css ={
        backgroundColor :theme?"#a2a8d3" : "#393e46",    
      }
  return (
    <div>
      {/* CHECK IF START BUTTON IS CLICKED OR NOT */}
      {start ? (<QuestionBox props ={[theme,0]}/>):(<div className="main" style={css}>
        <h1>QuizzGame</h1>
        {/* Start button */}
        <button className="start" onClick={()=>setStart(!start)}>Start Game</button>
      </div>)}
  </div>
  )
}
