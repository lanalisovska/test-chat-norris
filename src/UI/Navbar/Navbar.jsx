import s from './Navbar.module.css'
import React from 'react'
import dark_mode_icon from './../../UI/icons/moon.png'
import light_mode_icon from './../../UI/icons/brightness.png'


const Navbar = ({ switchTheme, theme }) => {    
    return (
        <div className={s.navbar}>
            <div className={s.navbar_links}>
                <span onClick={switchTheme}>
                    {theme === 'light'
                        ? <img alt='dark_mode_icon' src={dark_mode_icon} className={s.icon} />
                        : <img alt='light_mode_icon' src={light_mode_icon} className={s.icon} />}
                        </span>
            </div>
        </div>
    )
}


export default Navbar