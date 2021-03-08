import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from './Routes';

function Header() {

    const [menuCollapsed, setMenuCollapsed] = useState(false)

    useEffect(() => {
        const menuValue = localStorage.getItem('menuCollapsed')
        if (menuValue) {
            let newMenuValue = JSON.parse(menuValue)
            setMenuCollapsed(newMenuValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('menuCollapsed', JSON.stringify(menuCollapsed))
    }, [menuCollapsed])

    return (
        <div className={s.navBar}>
            <div>
                <div className={s.link} onClick={() => setMenuCollapsed(!menuCollapsed)}>Menu</div>
                {menuCollapsed && <Menu/>}
            </div>
            <div className={s.animateNavBar}>
                <div className={s.link}>Menu</div>
                <Menu/>
            </div>
        </div>
    );
}

const Menu = () => {

    return (
        <>
            <NavLink exact to={PATH.PRE_JUNIOR} className={s.link}>Pre Junior</NavLink>
            <NavLink exact to={PATH.JUNIOR} className={s.link}>Junior</NavLink>
            <NavLink exact to={PATH.JUNIOR_PLUS} className={s.link}>Junior+</NavLink>
        </>
    )
}


export default Header;
