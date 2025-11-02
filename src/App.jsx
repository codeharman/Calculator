import { useState, useEffect } from "react";

function CalculatorFunction() {

  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1)
  }

  const decrement = () => {
    setCounter(count - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <>
       <p className="contact">made by <a href="https://www.linkedin.com/in/codeharman/" target="_blank">@codeharman</a> with ❤️‍🔥. Click here for my <a href="https://github.com/codeharman" target="_blank">Github profile</a></p>
      <h1>Counter Program made in React</h1>
      <p className="describe">This is made using the "useState" hook in react</p>
      <p className="result">{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CalculatorFunction;