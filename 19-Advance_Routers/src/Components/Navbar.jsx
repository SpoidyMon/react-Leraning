import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-cyan-900 px-8 py-4 flex justify-between text-white'>
            <a className='text-2xl font-bold' href="/">Mucrik Schl</a>
            <div className='flex justify-between gap-8'>
                <Link className='text-lg font-semibold' to='/'>Home</Link>
                <Link className='text-lg font-semibold' to='/Courses'>Courses</Link>
                <Link className='text-lg font-semibold' to='/About'>About</Link>
                <Link className='text-lg font-semibold' to='/Product'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar
