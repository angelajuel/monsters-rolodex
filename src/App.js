import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  // constructor is the code that runs first before anything gets called
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

    // this is a React method already made
    // a good rule of thumb is to only use arrow functions on any class methods that aren't part of React
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      response.json())
    .then(users => this.setState({monsters: users}));
  }

  // arrow functions automatically allow you to set "this" when this thing is defined
  // arrow functions get lexical scoping - they bind this context to the place where the function was defined in the first palce
  handleChange = (e) => {
    this.setState( { searchField: e.target.value});
  }

  render() {
    // this says const monster = this.state.monsters and const searchField = this.state.searchField
    const { monsters, searchField } = this.state; 

    // includes returns true or false if the monster's name contains what's typed in the search box
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
