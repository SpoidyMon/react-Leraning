import  { useState } from 'react'

function App() {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Notes Added : "+title+" , "+detail);

    const copyTask=[...task];
    copyTask.push({title,detail});

    setTask(copyTask);

    setTitle('');
    setDetail('');
  }

  const deleteHandler=(idx)=>{

    const copytask=[...task];
    copytask.splice(idx,1);

    setTask(copytask);

  }

  return (
    <div className='h-screen lg:flex  bg-black text-white '>
      <form action="" className='flex lg:w-1/2 items-start p-10 flex-col gap-4'
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        {/* <title></title> */}
        <input type="text"
          placeholder='Enter ur Note'
          className='px-5 py-2 rounded text-2xl font-medium w-full border-2 outline-none '
          
          onChange={(e)=>{
            setTitle(e.target.value)
          }}

        />

        {/* details */}
        <textarea name="" id=""
          placeholder='Write Details'
          className='px-5 py-2 h-32 rounded text-2xl font-medium w-full border-2 outline-none '
          
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
        ></textarea>
        <button
          className='bg-white text-black text-2xl w-full px-5 py-2  outline-none font-medium border-2 active:scale-95'
        >Add Note</button>
      </form>

        <div className='lg:border-1-2 lg:w-1/2 p-10'>
          <h1 className='text-4xl font-bold'>Your Notes</h1>

            <div className='flex flex-wrap items-start justify-start content-start gap-5 mt-5 h-full overflow-auto'>
            {task.map(function(elem,idx){

              return <div key={idx} className="h-72 w-65 pt-9 pb-4 px-4 relative text-black rounded-xl flex flex-col items-start justify-between
              bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] bg-cover">

                <div >
                  <h3 className='leading-tight text-2xl font-bold mt-4 ml-1'>{elem.title}</h3>
                  <p className='mt-3 leading-tight text-xl  font-semibold text-gray-500 px-1 ml-1'>{elem.detail}</p>
                </div>
                
                <button onClick={()=>{
                  deleteHandler(idx);
                }} className='bg-red-600 text-white px-2 ml-1 font-bold align-middle py-2 rounded w-full cursor-pointer active:scale-95'>Delete</button>
              </div>

            })}
            
          </div>
        </div>

    </div>
  )
}

export default App
