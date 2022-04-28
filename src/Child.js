import React, { useState, useEffect } from 'react'
import './App.css';


function Child(props) {
const [count, setCount] = useState(0);

  return (
    <div className='main'>
    
      <button className='button' onClick={()=>props.handleIncrement(count, setCount)}>Increment</button>
      <button className='button' onClick={()=>props.handleDecrement(count, setCount)}>Decrement</button>
    </div>
  )
}

export default Child
