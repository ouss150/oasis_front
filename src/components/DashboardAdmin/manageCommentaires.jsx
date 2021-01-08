import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';
import AuthContext from '../auth/AuthContext'
export default class ManageCommentaires extends Component {

    state = {
        commentaires : []
    }

    static contextType = AuthContext;

    async componentDidMount(){
        await this.getAllCommentaires()
        // console.log(allcommentaires.data)
        
    }

    async getAllCommentaires(){
        const allcommentaires = await axios.get(process.env.REACT_APP_BACKEND_URL + "/commentaire/getByUser/" + this.context.currentUser._id)
        this.setState({commentaires : allcommentaires.data})
    }

    async deleteCommentaire(id){
        await axios.delete(process.env.REACT_APP_BACKEND_URL + "/commentaire/delete/" + id)
        await this.getAllCommentaires();
    }

    render() {
        const pathUrl = this.props.pathUrl
        return (
            <div>
                <table border="1" className="">
                    <thead className="thead">
                        <tr>
                        <th>article</th>
                        <th>date d'ajout</th>
                        <th>message</th>
                        <th>delete</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                    {
                        this.state.commentaires.map(commentaire => (
                            <tr>
                            <td>{commentaire?.article.titre}</td>
                            <td>{commentaire?.ajoute_le}</td>
                            <td>{commentaire?.message}</td>
                            <td> <button onClick={() => this.deleteCommentaire(commentaire._id)}>Delete</button></td>
                            </tr>
                        ))
                    } 
                    </tbody>   
                </table>
            </div>
        )
    }
}
