import React, { useState } from 'react';
import './App.css';
import Child from './Child';


function App() {
const[data,setData] = useState(0);
  const handleIncrement = (count,setCount) => {
    setCount(count+1);
    setData(count)
}
const handleDecrement = (count,setCount) => {
    setCount (count-1);
  setData(count);
  }

  return (
    <div className="main">
     
   <Child handleIncrement={handleIncrement} 
   
          handleDecrement={handleDecrement}
   />
<h2>Count:{data}</h2>
    </div>
  );
}

export default App;
