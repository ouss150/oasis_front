import React from 'react';
import Menu from './menu';
import logo from '../img/oasis4.jpg';
import Search from '../components/search';
import Burger from '../components/Burger/Burger';
import {useLocation} from 'react-router-dom';

export default function Header({ burgerCallback,isNavMobileActive}) {

    var img = ""

    const currentUrl = useLocation()
    console.log("parametre URL" ,currentUrl)

    if (currentUrl.pathname === "/") img = require('../img/oasis2.jpg')
    if (currentUrl.pathname == "/contact") img = require('../img/oasis4.jpg')


    const style={
        backgroundImage: `url(${img})`,
        // background: "../../src/img/portemaroc2.jpg"
        
    }
    return (
        <header className="header" style={style}>
            <div className="nav_logo">
            <img className="logo" src={logo}/>
            <Menu isNavMobileActive={isNavMobileActive}/>
          <Burger  burgerCallback={ burgerCallback }/>
            </div>
            {currentUrl.pathname == "/" && <Search/>}
        </header>
    )
}
