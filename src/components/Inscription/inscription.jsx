import React, { Component } from 'react'
import axios from 'axios';
import AuthContext from '../auth/AuthContext';


export default class inscription extends Component {
    state = {}
    static contextType = AuthContext;

    HandleChange = (evt) => this.setState({ [evt.target.name] : evt.target.value })

    HandleSubmit = async(evt) => {
        evt.preventDefault()
        this.context.signup(this.state, () => console.log("je suis le callback après l'inscription "))
        // await axios.post("http://localhost:8888/users/create", this.state)
    }

    render() {
        return (
            <div>
                <form action="" method="get" className="forminscription" onChange={this.HandleChange}>
                    <input type="text" placeholder="prenom" name="prenom" value={this.state.prenom}/>
                    <input type="text" placeholder="nom" name="name" value={this.state.name}/>
                    <input type="email" placeholder="email" name="email" value={this.state.email}/>
                    <input type="text" placeholder="password" name="password" value={this.state.password}/>
                    <input type="text" placeholder="telephone" name="telephone" value={this.state.telephone}/>
                    <input type="text" placeholder="adresse" name="adresse" value={this.state.adresse}/>
                    <input type="text" placeholder="civilite" name="civilite" value={this.state.civilite}/>

                    <button onClick={this.HandleSubmit} className="ok">
                        OK
                    </button>
                    
                </form>

            </div>
        )
    }
}
