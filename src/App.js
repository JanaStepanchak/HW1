import React, { Component } from 'react';
import contacts from './guestsHW.json';
import ListСontacts from './ListСontacts';

const conv_contacts = contacts.map(user => ({
  contact: user
}))

class App extends Component {

  state = {
    contacts: conv_contacts,
    condition: false,
    filter: null,
    query: ""
  }

  changeArriverStatus = (user_id) => () => {
   /* console.log(user_id);*/
    const changrdUser = this.state.contacts.map(user => {
      if (user.contact.index === user_id) {
        user.arriver = !user.arriver;
      }
      return user;
    });

    this.setState({
      contacts: changrdUser
    });
  }

  handleChange = (event) => {
    const { contacts } = this.state;
    const query = event.target.value.toLowerCase();
  /*  const results = contacts.filter((user) =>(user.contact.name.toLowerCase().indexOf(query) > -1)); */
    const results = contacts.filter((user) =>{
    return( user.contact.address.toLowerCase().indexOf(query) !== -1    ||
            user.contact.company.toLowerCase().indexOf(query) !== -1 ||
            user.contact.email.toLowerCase().indexOf(query) !== -1    ||
            user.contact.name.toLowerCase().indexOf(query) !== -1  )}
    );
    
    
    console.log('[query]', results);
    this.setState({
      filter: results,
      query: event.target.value
    })
  }

  render() {
    const { contacts, condition, query, filter } = this.state;
    const { changeArriverStatus, handleChange } = this;
      let list = contacts;
      if(filter !== null && query.length > 0 ){         
        list = filter;
     // console.log('[list]', list); 
    }

    return (
      <div className = 'id_root' >
       
        <header className = 'header'>
          <h1 >Список из {list.length} </h1>
          <input onChange={handleChange} value={query} />         
          </header>
          {
            list.map((user, key) => (
              <ListСontacts
                key={key}
                user={user}
                changer={changeArriverStatus}
          />))
          }
      </div>
    );
  }
}
export default App;
