import React from 'react'

const Navbar = (props) => {

    return (
        <div>
            <h2>{props.theme} theme</h2>
            <button onClick={()=>{
                if(props.theme=='light'){
                    props.setTheme('Dark');
                }else{
                    props.setTheme('Light');
                }
                
            }}>Change Theme</button>
        </div>
    )
}

export default Navbar
