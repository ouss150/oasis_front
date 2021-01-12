import React, { Component } from 'react'
import ArticleCard from './ArticleCard';
import image1 from '../../assets/images/1.webp';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';

import AuthContext from '../auth/AuthContext';
import axsios from "axios"
import Axios from 'axios';


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
    state = {
        articles : [] 
    }

    async componentDidMount(){
        const allArticles = await Axios.get(process.env.REACT_APP_BACKEND_URL + "/article")
        this.setState({articles : allArticles.data})
    }
    static contextType = AuthContext;
    render() {
        return (
            <div className="voyages">
                {/* {this.context.currentUser ? `User Connecté : ${this.context.currentUser.name}` : "Connectez-vous"} */}
                {
                    this.state.articles.map( article => (
                        <div className="article_card_wrap">
                            <ArticleCard articleId={article._id} img={image1} articleTitre={article.titre}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
