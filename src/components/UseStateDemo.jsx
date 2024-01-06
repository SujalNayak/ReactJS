import React, { useState } from 'react'

export const UseStateDemo = () => {
    var [count, setcount] = useState(0)
    const increseCount = () => {
        count++;
        setcount(count);
        console.log(count);
    }
  return (
    <div>
        <h1>UseStateDemo</h1>
        <h1>COUNT = {count}</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
    </div>
  )
}