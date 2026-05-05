import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({ username: 'Aniket', age: 13 })

  // function onclk() {
  //   console.log(num.username, num.age);

  //   const newNum = { ...num };
  //   newNum.username = 'Mrunal';
  //   newNum.age = 21;
  //   setNum(newNum);
  // }

  const [num, setNum] = useState({ username: 'Aniket', age: 13 })

  const onclk = () => {
    console.log(num.username, num.age);


    setNum(prev => ({ ...prev, username: 'yash', age: 22 }));
  }

  // const [num, setNum] = useState([10,20,25])

  // function onclk() {
  //   console.log(num.username, num.age);

  //   const newNum = [...num];
  //   newNum.push(99)
  //   setNum(newNum);
  // }

  const [x, setx] = useState(10)

  const updatenum = async () => {
    // setx(x+1);
    // setx(x+1);
    // setx(x+1);
    console.log(x)

     setx(prev =>  prev + 1 )
     setx(prev =>  prev + 1 )
     setx(prev =>  prev + 1 )

  

  }


  return (
    <div>

      {/* <h1>{num.username},{num.age}</h1> */}

      <h1>{num.username},{num.age}</h1>

      {/* <h1>{num}</h1> */}


        <button onClick={onclk}>click here</button> 

      <h1>{x}</h1>


      <button onClick={updatenum}>click here</button>
    </div>
  )
}

export default App
