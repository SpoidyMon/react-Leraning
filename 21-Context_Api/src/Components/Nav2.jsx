import  { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Nav2 = () => {

    const [theme]=useContext(ThemeDataContext)

    return (
        <div className='nav2'>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Services</h3>
            <h3 style={{color:'darkblue'}}>{theme}</h3>
        </div>
    )
}

export default Nav2
