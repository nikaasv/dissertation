import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main-nav">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default App;
