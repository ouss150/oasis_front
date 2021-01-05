import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AuthContext from './auth/AuthContext'
import { useHistory } from "react-router-dom";
//import Button from '@material-ui/core/Button';

export default function Nav({ navType, navStatus, isNavMobileActive }) {
    // const cssWrap = isNavMobileActive === "mobile" ? " row spaced full-width" : " inline";
    let history = useHistory();
    const ContextValue = useContext(AuthContext);
    const Type = isNavMobileActive?"mobile":"main"
    const cssNav = "nav " + (Type === "mobile" ? " mobile" : " main") + ((isNavMobileActive && " is-active") || "");
    
    const deconnexion = () => {
        ContextValue.signout();
        history.push("/Connexion")
    }
    return (
        <>
        <nav className={cssNav}>
            <ul>
                <li><NavLink  to="/">Home</NavLink></li>
                <li><NavLink  to="/about">About</NavLink></li>
                <li><NavLink  to="/contact">Contact</NavLink></li>
                {/* <li><NavLink  to="/Reservation">Reservation</NavLink></li> */}
                <li><NavLink  to="/#">Articles</NavLink></li>
                {ContextValue.currentUser == null ? 
                (
                    <>
                        <li><NavLink  to="/Connexion">Connexion</NavLink></li>
                        <li> <NavLink to="/Inscription">Inscription</NavLink></li>
                    </>
                ) : <li> <a onClick={deconnexion}>Deconnexion</a></li> }
            </ul>
        </nav>
        </>
    )
}

