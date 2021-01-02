import React, { Component } from 'react'
import axios from 'axios';
// import moment from 'moment'
export default class EditReservation extends Component {
    state = {
        // reservation : {}
    }

    async componentDidMount(){
        const reservation = await axios.get("http://localhost:8888/reservation/getOne/" + this.props.match.params.id)
        this.setState({reservation : reservation.data})
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name] : evt.target.value})
    }

     handleSubmit = async (e) => {
        e.preventDefault()
        await axios.patch("http://localhost:8888/reservation/edit/" + this.props.match.params.id, this.state) 
    }
    render() {
        // const date_aller = moment(this.state.reservation.date_aller).format("LL")
        // const date_retour = moment(this.state.reservation.date_retour).format("l")
        // console.log(date_aller)
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <h2>EDIT RESERVATION N° {this.props.match.params.id}</h2>
                Date aller<input type="date" name="date_aller" />
                Date retour<input type="date" name="date_retour" />
                <button>Mettre A jouer</button>
            </form>
        )
    }
}


// name: String,
//     client : {
//         type: Schema.Types.ObjectId,
//         ref: "Users"
//     },
//     voyage : {
//         type: Schema.Types.ObjectId,
//         ref: "Voyage"
//     },
//     date_aller: Date,
//     date_retour: Date
