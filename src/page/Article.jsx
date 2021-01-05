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

    style = {
        h1 : {
            fontSize : "58px"
        }
    }
    render() {
        const { article } = this.state;
        return (
            <>
            {
                article != null && (
                    <>
                    <div className="article_header" style={this.style}>
                        <h1>{article.titre}</h1> 
                    </div>
                    <Commentaire article={article}/>
                    </>
                )
            }
            
            </>
        )
    }
}
