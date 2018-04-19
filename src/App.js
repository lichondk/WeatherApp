import React, { Component } from 'react';
import Weather from './container/Weather'
class App extends Component {
  render() {
    return (
      <div>
        <h1> Weather To Today </h1>
        <Weather/>
      </div>
    );
  }
}

export default App;
