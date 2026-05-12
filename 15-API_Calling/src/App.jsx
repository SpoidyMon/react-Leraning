import { useState } from "react";
import axios from 'axios';




const App = () => {

  const [fact, setFact] = useState("");

  const fetchGet = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data.fact);

    setFact(data.fact);

    // const response=await fetch('https://picsum.photos/200/300');
    // console.log(response.url);

    // const response=await fetch('https://random.dog/woof.json');
    // const data=await response.json();
    // console.log(data.url);
  };

  const [data, setData] = useState([])

  const axiosGet = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data;
    setData(data)
  }


  return (
    <div>
      <div className="">
        <button
          onClick={() => {
            fetchGet();
          }}
        >
          Get Data
        </button>
        <h2>The fact is : {fact}</h2>
      </div>

      <div className="">
        <button
          onClick={() => {
            axiosGet();
          }}
        >
          Get Data
        </button>
        <div className="">
          {data.map(function (elem, idx) {

            return <h3>Hello {idx},{elem.name}</h3>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
