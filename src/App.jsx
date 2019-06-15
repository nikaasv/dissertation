import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <p>
          Veronika <code>src/App.js</code> and save to reload.
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
      {props.children}
    </div>
  );
}

export default App;
