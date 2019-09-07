import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation role="main" />
      </header>
      {props.children}
      <footer className="App-footer">
        <Navigation role="footer" />
      </footer>
    </div>
  );
}

export default App;
