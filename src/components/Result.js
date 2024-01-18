import React from 'react'

export default function Result(props) {
  let result = props.props[0]
  let theme = props.props[1]

  let resultstyle ={
    backgroundColor :theme?"#a2a8d3" : "#393e46"
  }
  console.log(result)
  console.log(result)
  let handleRestart =()=>{
    window.location.reload()
  }
  return (
    <div className='resultBox' style={resultstyle}>
      <h1>Final Results</h1>
      <h2>{result} out of 5 correct - {(result/5)*100}%</h2>
      <button className='restart' onClick={handleRestart}>Restart game</button>
    </div>
  )
}
