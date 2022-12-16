import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Appbar";
import Games from "./components/Games";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewGame from "./components/ViewGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />

        <Routes>
          <Route exact path="/view-game" element={<ViewGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
