import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component'
import './App.css';

//changes by Aris
class App extends Component {

  constructor() {
    super();

    this.state = {
      bots: [],
      searchField: ''
    }
  }

  //when the page mount(render??)
  componentDidMount() {
    //  promise -> Response from body (JSON: body header and properteis)
    //  we want the body and a format tha js understand so -> responses.json(). 
    //  new then() as i return a new promise will get the body(bots) which is array
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response => response.json()))
      .then(bots => this.setState({ bots: bots }))
  }

  getSearchValue = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { bots, searchField } = this.state

    const filteredbots = bots.filter((bot) => {
      return bot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <Search
          placeholder={'bots'}
          handleChange={this.getSearchValue} />
        <CardList bots={filteredbots} />
      </div>
    );
  }
}

export default App;
