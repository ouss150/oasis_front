import React from 'react';
import Menu from './menu';
import logo from '../assets/logo/logo_oasis.png';
import Search from '../components/search';
import Burger from '../components/Burger/Burger';
import { useLocation } from 'react-router-dom';

export default function Header({ burgerCallback,isNavMobileActive}) {
    var img = "";
    var height = "500px";
    const currentUrl = useLocation()
    switch(currentUrl.pathname){
        case "/" : {
            img = require('../assets/images/3.jpg')
            break;
        }
        case "/contact" : {
            img = require('../assets/images/4.jpg')
            break;
        }
        default: {
            height = "auto";
            break;
        }
    }


    // if (currentUrl.pathname === "/") img = require('../assets/images/3.jpg')
    // if (currentUrl.pathname == "/contact") img = require('../assets/images/4.jpg')

    const style={
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        height: height,
        width: "100%",
        backgroundRepeat: "no-repeat",
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