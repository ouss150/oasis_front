import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import ManageUsers from '../components/DashboardAdmin/manageUsers';
import ManageCommentaires from '../components/DashboardAdmin/manageCommentaires';
import EditUser from '../components/DashboardAdmin/editUser';
import EditProfile from '../components/DashboardAdmin/editProfile';
import AuthContext from '../components/auth/AuthContext';
import { ProtectedRoutesAdmin } from '../components/auth/ProtectedRoutes';
export default class DashboardAdmin extends Component {

    static contextType = AuthContext;

    render() {
        const pathUrl = this.props.match.path
        const url = this.props.match.url
        const {currentUser} = this.context
        console.log(pathUrl)
        return (
            <>
            <h1>DASHBOARD -  </h1>
            <p> Nom : {currentUser.name}</p>
            <p> role : {currentUser?.role}</p>

            <nav>
                <p>Gestion Profil</p>
                <ul>
                    <li><Link to={url + "/editProfile"} > Modifier mon profil</Link></li>
                    <li><Link to={url + "/manageCommentaires"} > Voir mes commentaires</Link></li>
                </ul>
            </nav>

            {currentUser.role == "admin" && (
                <nav>
                    <p>Gestion Admin</p>
                    <ul>
                        <li><Link to={url + "/manageUsers"} > gerer les utilisateurs</Link></li>
                        {/* <li><Link to={url + "/editProfile"} > gerer tous les commentaires</Link></li> */}
                    </ul>
                </nav>
            )}

            <Switch>
                <ProtectedRoutesAdmin path={pathUrl + "/manageUsers"} component={ManageUsers} >
                    <ManageUsers pathUrl={pathUrl}/>
                </ProtectedRoutesAdmin>
                <ProtectedRoutesAdmin path={pathUrl + "/manageCommentaires"} component={ManageUsers} >
                    <ManageCommentaires pathUrl={pathUrl}/>
                </ProtectedRoutesAdmin>
                <ProtectedRoutesAdmin path={pathUrl + "/editProfile"} component={EditProfile} />
                <ProtectedRoutesAdmin path={pathUrl + "/editUser/:id"} component={EditUser} />
            </Switch>    
            </>
        )
    }
}
