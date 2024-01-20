import React, { useState } from 'react'
import { Startbox } from './Startbox'


export default function Result(props) {
  // STORING SCORE AND CURRENT THEME
  let result = props.props[0]
  let theme = props.props[1]

  // FOR THE RESTART BUTTON
  let [showQues,setShowQues] = useState(false)
  let handleRestart =()=>{
    setShowQues(!showQues)
  }
  
  // FOR CHANGING THE THEME
  let resultstyle ={
    backgroundColor :theme?"#a2a8d3" : "#393e46"
  }
  // console.log(result)
  return (
    <>
    {/* CHECKING IF USER CLICKED THE BUTTON OR NOT  */}
    {showQues === false ?(<div className='resultBox' style={resultstyle}>
    <h1>Final Results</h1>
    {/* DISPLAT RESULT  */}
    <h2>{result} out of 5 correct - {(result/5)*100}%</h2>
    <button className='restart' onClick={handleRestart}>Restart game</button>
  </div>):
  // : IF BUTTON PRESSED RESTART THE GAME
  (<Startbox props={theme}/>)
}
</>
  )
}
