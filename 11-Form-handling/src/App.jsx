import React from 'react'

const App = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        // console.log(e.target)
    }

    return (
        <div>
            <form action="" onSubmit={(e) => {
                submitHandler(e);
            }}>
                <input type="text" placeholder='Enter your name' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App
