import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import Index from "./components/Index";
import Results from "./components/Results";

//code in app.js will display on ALL components.
//we need to take the table from app, and put it
//into the table component.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }
  //if user clicks this button then it will return specified data
  //search based on query made--like a Google search
  //maybe each CRUD method in their own
  componentDidMount() {
    // fetch("https://mocki.io/v1/27ae2c67-17b7-4603-b3fc-c9b7cfda7145", {
    //   method: "GET",
    // })
    // .then((response) => response.json()) //response as json
    // .then((data) =>
    //   alert(
    //     "FROM GET; Body data for firstName+lastName: " +
    //       data.firstName +
    //       data.lastName
    //   )
    // );
    fetch("https://mocki.io/v1/27ae2c67-17b7-4603-b3fc-c9b7cfda7145")
      .then((res) => res.json())
      .then((json) => json)
      .then((cities) => this.setState({ cities: cities }));
  }

  render() {
    return (
      <>
        <div className="App">
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="./">
              <img src={logo} alt="logo" width="40" onClick={<Index />} /> Games
              Database
            </a>
          </nav>
        </div>

        <Router>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
