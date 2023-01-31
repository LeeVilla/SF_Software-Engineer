import React from "react";
import { useState } from "react";
import Snack from "./Snacks";
import {Link,Route,Routes} from 'react-router-dom'

const VendingMachine = () => {
  const [selectedSnack, setSelectedSnack] = useState(null);

  const handleClick = (snack) => {
    setSelectedSnack(snack);
  };

  return (
    <div>
      <h1>Vending Machine</h1>
      <nav>
        <ul>
        <li>Home
            <Link to="/">Home</Link>
        </li>
          <li>
            <Snack
              name="Chips"
              price={1.5}
              onClick={() => handleClick("Chips")}
            />
            <Link to="/Chips">Chips</Link>
          </li>
          <li>
            <Snack
              name="Candy"
              price={0.75}
              onClick={() => handleClick("Candy")}
            />
            <Link to="/Candy">Candy</Link>
          </li>
          <li>
            <Snack name="Soda" price={2} onClick={() => handleClick("Soda")} />
            <Link to="/Soda">Soda</Link>
          </li>
        </ul>
      </nav>

      {selectedSnack && (
        <div>
          <h2>Selected snack:</h2>
          <p>{selectedSnack}</p>
        </div>
      )}
    </div>
  );
};

export default VendingMachine;
