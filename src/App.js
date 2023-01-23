import React from "react";
import Eightball from "./Eightball";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <span>Hello World</span>
        <div>
          <Eightball />
        </div>
      </div>
    </div>
  );
}

export default App;
