import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 m-4'>
                <Link className='font-semibold text-xl' to='/product/Men'>Men</Link>
                <Link className='font-semibold text-xl' to='/product/Women'>Women</Link>
                <Link className='font-semibold text-xl' to='/product/Kids'>Kids</Link>
            </div>
            <Outlet />
            {/* In React Router DOM, an <Outlet> is a component that acts as a placeholder within a parent route to render its child routes. It is the fundamental building block for creating nested layouts, */}

        </div>
    )
}

export default Product
