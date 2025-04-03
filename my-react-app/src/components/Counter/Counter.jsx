import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Counter Component</h1>
        <button onClick={handleClick}>Increment</button>
        <h2 data-testid="counterValue">{count}</h2>
    </div>
  )
}

export default Counter