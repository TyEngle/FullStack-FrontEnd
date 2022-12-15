import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import Appbar from "./components/Appbar";
import Games from "./components/Games";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Games />
    </div>
  );
}

export default App;
