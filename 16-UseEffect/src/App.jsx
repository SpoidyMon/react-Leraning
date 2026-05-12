import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(10)
  const [b, setB] = useState(100)

  const achanging = function () {
    console.log("value of a has been increased ");

  }

  const bchanging = function () {
    console.log("value of b has been decreased ");

  }

  useEffect(function () {
    console.log("useEffect has been used")
  }, [a]) //when ever state of a is changed this function will run as it is dependency

  return (
    <div>
      <h2> Value of A is :{a}</h2>
      <h2> Value of B is :{b}</h2>

      <button onClick={() => {
        setA(a + 1)
        achanging();
      }}>Increase A</button>

      <button onClick={() => {
        setB(b - 10);
        bchanging();
      }}>Decrease B</button>
    </div>
  )
}

export default App
