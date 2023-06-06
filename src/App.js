// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect, useReducer } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const Up = "Up"
  const Down = "Down"
  const handlerandom = () => {
    setNumber(Math.floor(Math.random() * 10))
  }

  useEffect(() => {
    document.title = `You click${count1} times`
  })
  const handleClick = () => {
    setCount1(count1 + 1)
  }
  const Reducer = (state, action) => {
    if (action === Up) {
      return state + 1
    } else if (action === Down) {
      return state - 1
    }
  }
  const [count3, dispatch] = useReducer(Reducer, 0)





  return (
    <div className="App">
      <p>ban hay click :{count}</p>
      <button onClick={() => setCount(count + 1)}>check</button>
      <h1>result{number}</h1>
      <button onClick={handlerandom}>Random</button>
      <h1>Click useEffect{count1}</h1>
      <button onClick={handleClick}>Click useEffect</button>
      <h1>Count:{count3}</h1>
      <button onClick={() => dispatch(Up)}>Up</button>
      <button onClick={() => dispatch(Down)}>Down</button>
    </div>
  )
}

export default App;
