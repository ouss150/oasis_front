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
            <div>
                Poster un commentaire :

                <form onChange={this.handleText} onSubmit={this.postComment}>
                    <input defaultValue={this.state.message} type="text" />
                    <button>Poster</button>
                </form>
            </div>
        )
    }
}
