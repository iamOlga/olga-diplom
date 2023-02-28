import React from 'react'
import './dist/Menu.css'
import { Link } from "react-router-dom";



const Menu = ({items, active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
        <div className="blur" onClick={() => setActive(false)}></div>

        <div className="menu__content">
            <ul>
                <li>
                    <Link to="/tours" >туры</Link>
                </li>
                <li>
                    <Link to="/booking">забронировать</Link>
                </li>
                <li>
                    <Link to="/gallery">галерея</Link>
                </li>
                <li>
                    <Link to="/account">аккаунт</Link>
                </li>
            </ul>

            <div className="menu__info">
                <Link to="/"><div className='menu__logo'></div></Link>
                <Link className='menu__email' to="/error"><p>portaltravel@gmail.com</p></Link>  
            </div>
        </div>    
    </div>
  )
}

export default Menu;