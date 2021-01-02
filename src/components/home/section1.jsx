import React, { Component } from 'react'
import Article from './articles';
import image1 from '../../img/ouarzazate.jpg'; 
import image2 from '../../img/oasis1.jpg';
import image3 from '../../img/volibilis1.jpg';
import image4 from '../../img/tamnougalt.jpg';
import AuthContext from '../auth/AuthContext';
// import lol from '../../img/'


const article = {
    name: "",
    devise: "$",
    prix: 21,
    image: image1,
    page: "/contact"
}

const article2 = {
    name: "La cité de Yunkai",
    devise: "$",
    prix: 21,
    image: image2,
    page: "/Accueil"
}

const article3 = {
    name: "Volibilis",
    devise: "$",
    prix: 21,
    image: image3
}

const article4 = {
    name: "Thingir",
    devise: "$",
    prix: 21,
    image: image4
}




const articles = [article,article2, article3, article4, article4, article4];



// import React, { Component } from 'react'

export default class section1 extends Component {
    static contextType = AuthContext;
    render() {
        return (
            <div className="voyages">
            {
                this.context.currentUser ? `User Connecté : ${"est connecté"}` : "Connectez-vous"
            }
           {
                articles.map( article => {
                return <Article article={article}/>
           })
           
           }
        </div>
        )
    }
}
