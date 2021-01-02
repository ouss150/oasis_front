
import Axios from 'axios'
import React, { Component } from 'react'

export default class search extends Component {
    state={}
    CreateReservation=(evt) =>{
        evt.preventDefault()
        Axios.post(process.env.REACT_APP_BACKEND_URL+"/reservation/create",this.state)
    }
  HandleChange =(evt) =>{
        this.setState({[evt.target.name]:evt.target.value})
    }
    render() {

        return ( 
            
            <form name="menuform">
        <select name="menu2" 
        onChange="top.location.href = this.form.menu2.options[this.form.menu2.selectedIndex].value;
        return false;">
        <option value="oasis1.html">Oasis de j'aime pas le tire</option>
        <option value="oasis2.html">Oasis de chez hanout</option>
        <option value="">Oasis sanvensa</option>
        <option value="">Oasis sud</option>
        <option value="">Oasis nord</option>
        </select>
        </form>
        )}
        
}

