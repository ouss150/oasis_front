import React, { Component } from 'react'

export default class formulaire extends Component {
    render() {
        return (
            <div>
                 <form>
           <label>
               <input type="text" name="e-mail"/>

           </label>
              <input type="password"   name="password"/>
              <button> Valider </button>
            </form>
            </div>
        )
    }
}
