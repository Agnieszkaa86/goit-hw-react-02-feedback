import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  counter = (event) => {
    const { name } = event.target;
    this.setState({ [name]: this.state[name] + 1 });
  }
}
export default App;
