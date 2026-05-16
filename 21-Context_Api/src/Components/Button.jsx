import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {

    const [theme, SetTheme] = useContext(ThemeDataContext);

    const changetheme = () => {
        if (theme == 'light') {
            SetTheme('dark')
        } else {
            SetTheme('light')
        }
    }

    return (
        <div>
            <button style={{color:'black'}} onClick={() => {
                changetheme()
            }}>Change {theme} Theme </button>
        </div>
    )
}

export default Button
