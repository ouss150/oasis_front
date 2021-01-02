import React, { Component } from 'react'
import Axios from 'axios'
import AuthContext from "../auth/AuthContext";

export default class connexion extends Component {
    state = {}
    static contextType = AuthContext;
    connexion = (evt) => {
        evt.preventDefault();
        this.context.signin(this.state, () => console.log("je suis le callback"));
        console.log(this.context)
        // Axios.post(process.env.REACT_APP_BACKEND_URL + "/users")
    }

    HandleInput(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }

    render() {
        return (
        <div>
            <h1>Connexion</h1>
            <form onChange={(evt) => this.HandleInput(evt)} onSubmit={this.connexion}>
                <label>
                <input type="text" name="email" placeholder="email"/>
            
                </label>
                <input type="password"   name="password" placeholder="password"/>

                <button> Valider </button>
            </form>
        
        </div>
        )
    }
}

