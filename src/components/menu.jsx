import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AuthContext from './auth/AuthContext'
import { useHistory } from "react-router-dom";
//import Button from '@material-ui/core/Button';

export default function Nav({ navType, navStatus, isNavMobileActive }) {
    let history = useHistory();
    const ContextValue = useContext(AuthContext);
    const Type = isNavMobileActive?"mobile":"main"
    const cssNav =
      "nav " +
      (Type === "mobile" ? " mobile" : " main") +
      ((isNavMobileActive && " is-active") || "");
    const cssWrap = isNavMobileActive === "mobile" ? " row spaced full-width" : " inline";
    const deconnexion = () => {
        ContextValue.signout();
        history.push("/Connexion")
    }
    // console.log( "PROVIDER NAV" , ContextValue.currentUser.name)
    return (
        <>
        <nav className={cssNav}>
             <NavLink  to="/">Home |</NavLink>
           <NavLink  to="/about">About |</NavLink>
           <NavLink  to="/Connexion">Connexion |</NavLink>
           <NavLink  to="/contact">Contact |</NavLink>
           <NavLink  to="/Reservation">Reservation</NavLink>
           <NavLink  to="/Inscription">Inscription</NavLink>
            {/* <ul className="link">
                <li><Button variant="contained" color="primary">
                    Hello World
                 </Button> </li>
                <li><Button variant="contained" color="primary">
                    Hello World
                 </Button> </li>
                <li><Button variant="contained" color="primary">
                    Hello World
                 </Button> </li>
                <li>
                    <Button variant="contained" color="primary">
                        Hello World
                 </Button>
                </li>
                <Button variant="contained" color="primary">
                    Hello World
                 </Button>

                   */}
    
                
        {/* </ul> */}

            {
                
                ContextValue.currentUser != null ? <button onClick={deconnexion}>Deconnexion</button> : ""
            }
            

        </nav>
    </>
        
    )
}

