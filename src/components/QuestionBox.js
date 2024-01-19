import React, { useEffect, useState } from 'react'
import questions from '../questions'
import Result from './Result'

export default function QuestionBox(props) {
  // for checking the theme
  let theme = props.props[0]
  let [highlight,sethighlight]=useState(false)
  // for storing the ques number and player score
  let [QuesNo, setQuesNo] = useState(props.props[1])
  let [score, setScore] = useState(0)

  // CSS FOR BACKGROUND THEME
  let css ={
    backgroundColor :theme?"#a2a8d3" : "#393e46",    
  }
  let btn ={
    backgroundColor :theme?"white" : "#393e46", 
    color :theme? "black" :"white", 
  }
  // CSS TO HIGHLIGHT QUESTION
  let highlightstyle={
    color: highlight? "red":"",
  }

  // UPDATING THE SCORES
  let handleOptions=(e)=>{
    // console.log(e.target.value)
    setScore((e.target.value === 'true' ?score+1 : score))
      setQuesNo(QuesNo+1)
  }
  return (
 <>
    {/* CHECKING THE QUESTION NUMBER AND SHOWING THE RESULT */}
    {QuesNo <5 ?(
      <div className='quesBox' style={css}>
      <h2>Question: {QuesNo+1} out of 5</h2>
      <h3 style={highlightstyle}>{questions[QuesNo].text}</h3>
      <div className='optbox'>
        {/* BUTTON FOR OPTIONS  */}
      {questions[QuesNo].options.map((el)=>(
        <button className='options' style={btn} value={el.isCorrect} key={el.id} onClick={handleOptions} >{el.text}</button>
      ))}
      </div>
      <div>
        {/* BUTTONS FOR HIGHLIGHT QUESTION */}
        <button className='highlightbtn' style={btn} onClick={()=>sethighlight(true)}>Highlight</button>
        <button className='highlightbtn' style={btn} onClick={()=>sethighlight(false)}>Remove Highlight</button>
      </div>
    </div>
    ):(<Result props={[score,theme]}/>)}
    </>  
  )
}

