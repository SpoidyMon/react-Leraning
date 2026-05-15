import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    //Used to redirect
    const navigate = useNavigate()

    return (
        <div className='flex items-center m-4 gap-10'>
            <button className='bg-amber-600 px-4 py-2 cursor-pointer rounded-2xl font-semibold active:scale-95'
                onClick={() => {
                    navigate('/')
                }}

            >Back to Home page</button>
            <button className='bg-amber-600 px-4 py-2 cursor-pointer rounded-2xl font-semibold active:scale-95'
                onClick={() => {
                    navigate(-1)
                }}

            >Back </button>
            <button className='bg-amber-600 px-4 py-2 cursor-pointer rounded-2xl font-semibold active:scale-95'
                onClick={() => {
                    navigate(+1)
                }}

            >Next</button>
        </div>
    )
}

export default Navbar2
