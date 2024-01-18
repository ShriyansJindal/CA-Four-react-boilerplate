import React, { useEffect, useState } from 'react'
import questions from '../questions'
import Result from './Result'

export default function QuestionBox(props) {
  let theme = props.props
  let [highlight,sethighlight]=useState(false)

  let css ={
    backgroundColor :theme?"#a2a8d3" : "#393e46",    
  }

  let [QuesNo, setQuesNo] = useState(0)
  let [score, setScore] = useState(0)

  let handleOptions=(e)=>{
    console.log(e.target.value)
    // if(e.target.value===true){
    //   setScore(score+1)
    // }
    setScore((e.target.value == 'true' ?score+1 : score))
      setQuesNo(QuesNo+1)
    
  }
  let highlightstyle={
    color: highlight? "red":"",
  }
 

  return (
 <>
    {QuesNo <5 ?(
      <div className='quesBox' style={css}>
      <h2>Question: {QuesNo+1} out of 5</h2>
      <h3 style={highlightstyle}>{questions[QuesNo].text}</h3>
      <div className='optbox'>
      {questions[QuesNo].options.map((el)=>(
        <button className='options' value={el.isCorrect} key={el.id} onClick={handleOptions} >{el.text}</button>
      ))}
      </div>
      <div>
        <button className='highlightbtn' onClick={()=>sethighlight(true)}>Highlight</button>
        <button className='highlightbtn' onClick={()=>sethighlight(false)}>Remove Highlight</button>
      </div>
    </div>
    ):(<Result props={[score,theme]}/>)}
    </>  
  )
}

