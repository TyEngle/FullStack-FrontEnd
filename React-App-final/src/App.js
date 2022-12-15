import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="./">
            <img src={logo} alt="logo" width="40" /> Games Database
          </a>
        </nav>
      </div>
    );
  }
}

export default App;
