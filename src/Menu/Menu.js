import React from 'react'
import './dist/Menu.css'
import { Link } from "react-router-dom";




const Menu = ({items, active, setActive}) => {

    function menu(){
        let menu = document.getElementById("menu");
        if (menu.classList.contains("active"))
        {
            menu.classList.remove('active');
        }
    }

  return (
    <div id="menu" className={active ? 'menu active' : 'menu'}>
        <div className="blur" onClick={() => setActive(false)}></div>

        <div className="menu__content">
            <ul>
                <li>
                    <Link to="/tours" onClick={() => menu()}>туры</Link>
                </li>
                <li>
                    <Link to="/booking" onClick={() => menu()}>забронировать</Link>
                </li>
                <li>
                    <Link to="/gallery" onClick={() => menu()}>галерея</Link>
                </li>
                <li>
                    <Link to="/virtual_tour" onClick={() => menu()}>о полете</Link>
                </li>
                <li>
                    <Link to="/account" onClick={() => menu()}>аккаунт</Link>
                </li>
                <li>
                    <Link to="/reviews" onClick={() => menu()}>отзывы</Link>
                </li>
            </ul>

        </div>    
    </div>
  )
}

export default Menu;