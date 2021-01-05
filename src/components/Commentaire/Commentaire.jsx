import React, { Component } from 'react'
import axios from 'axios'
import CommentaireForm from './CommentaireForm'
import AuthContext from "../auth/AuthContext";
export default class Commentaire extends Component {

    state = {
        allCommentaire : []
    }

    static contextType = AuthContext;

    componentDidMount = async () => {
        this.getAllCommentaire()
    }

    postCommentaire = async (message) => {
        console.log(message)
        await axios.post(process.env.REACT_APP_BACKEND_URL + "/commentaire/create", {
            auteur : this.context.currentUser._id,
            message,
            article : this.props.article
        })
        this.getAllCommentaire();

    }
    
    async getAllCommentaire(){
        const allCommentaire = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/commentaire/getByArticle/" + this.props.article._id);
        this.setState({allCommentaire : allCommentaire.data})
    }
    render() {
        return (
            <div>
                <CommentaireForm article={this.props.article} postCallback={this.postCommentaire}/>
                {
                    this.state.allCommentaire.map((commentaire, key) => (
                        <p key={key}>{commentaire.message}  ||||||||||  ecrit par : {commentaire.auteur.name}</p>
                    ))
                }
            </div>
        )
    }
}
