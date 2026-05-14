import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <h3>Mrunal's School</h3>
            <div>
                <Link style={{textDecoration:'none'}} to='/'>Home</Link>
                <Link style={{textDecoration:'none'}} to='/About'>About</Link>
                <Link style={{textDecoration:'none'}} to='/Contact'>Contact</Link>
                <Link style={{textDecoration:'none'}} to='/Product'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar
