import React, { Component } from "react";
import Img from './Img';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Img url={'https://itsgoingdown.org/wp-content/uploads/2017/03/1-2-350x214-5.jpg' } />
      </div>
    );
  }
}

export default App;
