import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      filteredText: '',
      fallDeserts: ['pumpkin cookies', 'pumpkin bread', 'spice cake', 'carmel appels', 'pie']
    }
  }

  handleChange(filtered){
    this.setState({
      filteredText: filtered
    })
  }

  render() {
    let foodsToDisplay = this.state.fallDeserts
    .filter((element, index) => {
      return element.includes(this.state.filteredText);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
