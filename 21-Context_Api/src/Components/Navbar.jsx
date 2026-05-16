import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {

    // using Context(UseContext)
    const [theme]=useContext(ThemeDataContext)


    return (
        <div className={theme}>
            <h2>Mucrik</h2>
            <Nav2/>
        </div>
    )
}

export default Navbar
