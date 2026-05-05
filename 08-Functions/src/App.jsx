import React from 'react'

const App = () => {

  const onclk=()=>{
    console.log("You have hover on the screen ")
  }

  return (
    <div>
      <div className="box">
        <h2>Just click anywhere</h2>
        <button  onClick={onclk}>Click here!!</button>
      </div>
    </div>
  )
}

export default App
