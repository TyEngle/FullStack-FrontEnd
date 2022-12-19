import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Appbar";
import Games from "./components/Games";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewGame from "./components/ViewGame";
import GetGame from "./components/GetGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />

        <Routes>
          <Route exact path="/view-game" element={<ViewGame />} />
          <Route exact path="/get-game" element={<GetGame />} />
          <Route exact path="/games" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
