import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation function="main" />
      </header>
      {props.children}
      <footer className="App-footer">
        <Navigation function="footer" />
      </footer>
    </div>
  );
}

export default App;
