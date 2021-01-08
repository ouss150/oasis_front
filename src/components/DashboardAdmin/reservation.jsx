import Axios from 'axios';

import moment from 'moment'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Reservation extends Component {    
    state = {
        reservations : []
    }
    async componentDidMount(){
        const reservations = await Axios.get("http://localhost:8888/reservation")
        this.setState({reservations:reservations?.data});
        console.log(reservations);
    }

    delete = async (id) => {
        await Axios.delete("http://localhost:8888/reservation/delete/" + id)
        const reservations = await Axios.get("http://localhost:8888/reservation")
        this.setState({reservations:reservations.data});
        //this.setState({reservations:reservations.data});
    }
    render() {
        return (
            <div>
                <table border="1" className="uc7">
                    <thead className="thead">
                        <tr>
                            <th>User</th>
                            <th>Voyage</th>
                            <th>date aller</th>
                            <th>date retour</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                    {
                        this.state.reservations.map(reservation => ( 
                            <tr>
                                <td>{reservation?.client?.name}</td>
                                <td>{reservation?.voyage?.name}</td>
                                <td>{moment(reservation.date_aller).format("LL")}</td>
                                <td>{moment(reservation.date_retour).format("LL")}</td>
                                <td> <Link to={"/editReservation/" + reservation._id} > <button>Edit</button> </Link> </td>
                                <td> <button onClick={() => this.delete(reservation._id)}>Delete</button></td>
                               
                            </tr>
                        ))
                    } 
                    </tbody>   
                </table>
            </div>
        )
    }
}

