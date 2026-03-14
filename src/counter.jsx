import { useState } from "react"

export default function Counter (){
  const [count,setCount]= useState(0);
  function addCont (){
    setCount(prev=> prev+=1)
  }
  return (
    <div className="card"> 
      <h3>Count: {count}</h3>
      <button onClick={addCont}>Add count</button>
    </div>
  )
}