import React, { Component } from 'react'
import axios from 'axios'
export default class CommentaireForm extends Component {

    state = {
        message : ""
    }

    postComment = async (evt) => {
        evt.preventDefault();
        this.props.postCallback(this.state.message)
    }

    handleText = (evt) => {
        this.setState({message : evt.target.value})
    }

    render() {
        return (
            <div className="commentaire_form">
                <span className="titre_commentaire_form">Poster un commentaire</span>
                <small className="desc_commentaire_form">Partagez votre avis avec la communauté.</small>

                <form onChange={this.handleText} onSubmit={this.postComment}>
                    {/* <input defaultValue={this.state.message} type="textArea" /> */}
                    <textarea defaultValue={this.state.message} placeholder="Ecrivez votre message ..."/>
                    <button>Poster</button>
                </form>
            </div>
        )
    }
}
