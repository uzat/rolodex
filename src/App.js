import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      localUsers: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({localUsers: users})); // we're binding our local state property to the response object received
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    const { localUsers, searchTerm } = this.state;
    const filteredUsers = localUsers.filter(localUser =>
      localUser.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
      <div className="App">
        <h1>Users Rolodex</h1>
        <SearchBox
          placeholder='search users...'
          handleChange={this.handleChange}
        />
        <CardList localUsers = { filteredUsers }></CardList>
      </div>
    );
  }
}

export default App;
