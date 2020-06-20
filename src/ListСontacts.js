import React, { Component } from 'react';
//import './App.css';

class ListСontacts extends Component {

    render = () => {
        const { user, changer } = this.props;
        const { arriver, contact } = user;

        return ( 
            <  div className = 'content'>
                <div className = 'list'>
                    <h4>{contact.name}</h4>
                    <div>works in the company {contact.company}</div>                   
                    <div>contacts {contact.phone}</div>
                    <div>contacts {contact.email}</div>
                    <div>contacts {contact.address}</div>
                </div>
                <div className = 'button'>
                    <button onClick={changer( contact.index )}    className = {arriver ? "green" : "red"}>{arriver ? "Arrived" : "Not Arrived"}</button>
                </ div>
            </ div>
        )
    }

}

export default ListСontacts;