import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default class manageUsers extends Component {

    state = {
        users : []
    }

    async componentDidMount(){
        const allUsers = await this.getAllUsers()
        this.setState({users : allUsers.data})
    }

    async getAllUsers(){
        return await axios.get(process.env.REACT_APP_BACKEND_URL + "/users/")
    }

    async deleteUser(id){
        await axios.delete(process.env.REACT_APP_BACKEND_URL + "/users/delete/" + id)
        this.getAllUsers();
    }

    render() {
        const pathUrl = this.props.pathUrl
        return (
            <div>
                <table border="1" className="">
                    <thead className="thead">
                        <tr>
                        <th>name</th>
                        <th>prenom</th>
                        <th>civilite</th>
                        <th>email</th>
                        <th>telephone</th>
                        <th>adresse</th>
                        <th>role</th>
                        <th>edit</th>
                        <th>delete</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                    {
                        this.state.users.map(user => (
                            <tr>
                            <td>{user?.name}</td>
                            <td>{user?.prenom}</td>
                            <td>{user?.civilite}</td>
                            <td>{user?.email}</td>
                            <td>{user?.telephone}</td>
                            <td>{user?.adresse}</td>
                            <td>{user?.role}</td>
                            <td> <Link to={pathUrl + "/edituser/" + user._id} > <button>Edit</button> </Link> </td>
                            <td> <button onClick={() => this.deleteUser(user._id)}>Delete</button></td>
                            </tr>
                        ))
                    } 
                    </tbody>   
                </table>
            </div>
        )
    }
}
