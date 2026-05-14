import { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'

const App = () => {
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getdata = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
  }

  useEffect(function () {
    getdata();
  }, [index])

  let printUserData = <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-0.5 -translate-y-0.5 font-semibold'>LOADING....</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Cards elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto bg-black text-white p-4'>


      <div className='flex flex-wrap gap-4  p-2'>
        {printUserData}
      </div>

      <div className=' flex justify-center items-center gap-6 p-4'>
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setUserData([])
              setIndex(index - 1)
            }
          }}
          className='bg-amber-500 text-black text-xs px-4 py-2 active:scale-95 cursor-pointer font-semibold rounded'>Prev</button>

        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
          className='bg-amber-500 text-black text-xs px-4 py-2 active:scale-95 cursor-pointer font-semibold rounded'>Next</button>
      </div>
    </div>
  )
}

export default App
