import React, { Component } from 'react'
import axios from 'axios';
import Section1 from './section1';
import Section2 from './section2';
// import Footer from '../footer';


// import Sidebar from '../MenuBurger/Sidebar';
export default class home extends Component {
    // state = {
    //     allUsers:[]
    // }

    // async componentDidMount(){
    //     const allUsers = await axios.get("http://localhost:8888/users")
    //     console.log();
    //     this.setState({allUsers : allUsers.data})

    // }
   render() {
        return (
            <div>
            
           <Section1/>
           <Section2/>
            
            </div>
        )
    }
}
