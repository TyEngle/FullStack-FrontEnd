import React, { useState } from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Appbar";
import Games from "./components/Games";
import LoginForm from "./components/Login/LoginForm";

function App() {
  const adminUser = {
    email: "Morgan@Morgan.com",
    password: "ILOVEPITFALLS"
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in!");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details don't match!");
      setError("Details don't match!")
    }
  }

  const Logout = () => {
    console.log("Logout")
    setUser({ name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <Appbar />
          <Games />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
      </div>
  )
}

export default App;
