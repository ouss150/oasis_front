import React, { Component } from 'react'
import axios from 'axios'
import CommentaireForm from './CommentaireForm'
import AuthContext from "../auth/AuthContext";
import moment from "moment"
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
            article : this.props.article,
            ajoute_le: Date.now()
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
            <div className="commenaire_block">
                <CommentaireForm article={this.props.article} postCallback={this.postCommentaire}/>
                {
                    this.state.allCommentaire.map((commentaire, key) => (
                        <div className="one_commentaire_bloc">
                            <p key={key}> {commentaire.auteur.name} · <small>{moment(commentaire.ajoute_le).fromNow()}</small></p>
                            <p id="commentaire_message" key={key}>{commentaire.message} </p>
                        </div>
                    ))
                }
            </div>
        )
    }
}
