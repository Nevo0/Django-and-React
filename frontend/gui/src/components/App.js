import React, { Component } from "react";

import "./App.css";

const API = "http://127.0.0.1:8000/api";

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    // setTimeout(this.fetchData, 3000);
    fetch(API)
      .then(result => result.json())
      .then(data => {
        console.log(data);

        this.setState({
          data: data.results
        });
      });
  }

  render() {
    console.log(this.state.data);
    const data = this.state.data.map(word => (
      <div key={word.title}>
        <h1>{word.title}</h1> <br /> {word.content}
      </div>
    ));
    return (
      <div className="App">
        <div>{data}</div>
      </div>
    );
  }
}

export default App;
