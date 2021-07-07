import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ball = () => {
    if (balls === 3) {
      setBalls(0);

      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0);

      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const foul = () => {
    if (strikes === 2) {
      setStrikes(2);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    setStrikes(0);

    setBalls(0);
  };

  return (
    <div className="app">
      <div className="scoreboard">
        <h1>Scoreboard:</h1>
        <Display strikes={strikes} balls={balls} />
      </div>
      <div className="controls">
        <h3>Scoreboard Controls:</h3>
        <Dashboard ball={ball} strike={strike} foul={foul} hit={hit} />
      </div>
    </div>
  );
}

export default App;
