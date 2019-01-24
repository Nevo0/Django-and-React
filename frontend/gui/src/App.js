import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const API = "http://127.0.0.1:8000/api/?format=json";

class App extends Component {
  state = { words: [] };

  componentDidMount() {
    // setTimeout(this.fetchData, 3000);
    fetch(API)
      .then(result => result.json())
      .then(data => {
        console.log(data);

        this.setState({
          words: data.results
        });
      });
  }

  render() {
    console.log(this.state.words);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
