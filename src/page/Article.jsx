import React, { Component } from 'react'
import Commentaire from '../components/Commentaire/Commentaire'
import axios from "axios"
export default class Article extends Component {

    state = {
        article : null
    }

    async componentDidMount(){
        const article = await axios.get(process.env.REACT_APP_BACKEND_URL + "/article/getOne/" + this.props.match.params.id)
        this.setState({article: article.data})
    }
    
    

    style2 = {
        // backgroundImage: "url('../assets/images/articles_imgs/Figuig/banniere.jpg')",
        // backgroundImage: `url("${img}")`
    }
    render() { 
        // après quoi ??????
        // console.log(imgs)
        var banniereImg = ""
        var backgroundPosition = "0px -250px";
        if ( this.state.article != null )
        {
            banniereImg = require('../assets/images/articles_imgs/' + this.state.article.titre + "/banniere.jpg")
            // if (this.state.article.titre == "Ziz") backgroundPosition = "0px -420px";
        }
        console.log(banniereImg)
        const style = {
            h1 : {
                fontSize : "58px"
            },
    
            header : {
                backgroundSize : "100%",
                backgroundRepeat : "no-repeat",
                backgroundImage: `url("${banniereImg}")`,
                backgroundPosition : backgroundPosition
            }
        }
        const { article } = this.state;
        return (
            <>
            {
                article != null && (
                    <>
                    <div className="article_header" style={style.header}>
                        <h1>{article.titre}</h1>
                    </div>
                    <article className="article_body">
                    C’est peut-être l’une des plus connues autour du monde : l’oasis de Ziz est un véritable paradis au coeur du Sahara, le plus grand désert du monde. Heureusement, il ne s’agit pas d’une illusion, mais d’un magnifique point d’eau formé par une rivière presque asséchée.

Rendez-vous aux villages de Tafilalet ou Aoufous, cachés au milieu d’une grande forêt de palmes, que l’on ne penserait jamais retrouver au beau milieu du désert. L’eau permet aux locaux de pratiquer de l’agriculture malgré les conditions arides du Sahara : on y retrouve de nombreux fruits et des céréales.

Historiquement, c’est un lieu très important pour le Maroc. Point de commerce pour les épices, c’est aussi ici qu’est née la dynastie alaouite.
                    </article>
                    <Commentaire article={article}/>
                    </>
                )
            }
            
            </>
        )
    }
}
