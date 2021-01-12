import React from 'react';
import logo from '../assets/logo/logo.jpg'

export default function footer() {
    return (
        <div className="footer">
            
           {/* <ul className="ecrit1">
           
               
               
           </ul>
           <ul className="ecrit2">
                <li>Nos Agences</li>
                <li>Qui sommes-nous?</li>
                <li>Professionel</li>
                <li>Conditions général de vente</li>
           </ul>
           <div className="textFooter">
               OasisVoyages est une agence de voyage proposant des destinations exceptionnel,
              <p className="text2"> Loin des temps modernes, proche de Games of thrones ,</p>
              <p className="text3"> OasisVoyages propose des Oasis et présente un tout autre Maroc loin de l'urbanisation.</p>
           </div> */}
           <div className="footer_body">
                <div className="plan_site_footer">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Articles</li>
                </div>
                <img className="footer_logo" src={logo} />
           </div>
            <div className="footer_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium. At nesciunt temporibus veritatis culpa neque ut voluptates aperiam.
            </div>
           <div className="footer_contact"><small>+33-07-67-58-91-22</small> - <small>bouazzao@outlook.fr</small></div>
        </div>
    )
}
