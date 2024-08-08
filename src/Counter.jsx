import React, { useState } from 'react'
import { useEffect } from 'react';

const Counter = () => {
       const [counter, setcounter] = useState(0);
       useEffect(() => {
            console.log('DidMount & update');
            return () => console.log("WillUnMount");
       }, [counter]);



  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increment</button>
        <button onClick={() => counter>0 && setcounter(counter - 1)}>Decrement</button>
    </div>
  )
}

export default Counter