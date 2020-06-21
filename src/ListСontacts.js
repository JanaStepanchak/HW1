import React, { Component } from 'react';
//import './App.css';

class ListСontacts extends Component {

    render = () => {
        const { user, changer } = this.props;
        const { arriver, contact } = user;

        return ( 
            <  div className = 'contentAll'>
               
                    <h4  className = 'name'>{contact.name}</h4>
                    < div className = 'content'>
                    < div className = 'list'>

                    <div className = 'title'>works in the company : {contact.company}</div>                   
                    <div className = 'title'>phone  : {contact.phone}</div>
                    <div className = 'title'>email  :  {contact.email}</div>
                    <div className = 'title'>address  :  {contact.address}</div>
                    </ div>

                    
                <div className = 'button'>
                    <button onClick={changer( contact.index )}    className = {arriver ? "green" : "red"}>{arriver ? "Arrived" : "Not Arrived"}</button>
                
                </div>
                </div>
            </ div>
        )
    }

}

export default ListСontacts;