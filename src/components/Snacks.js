import React from "react";

const Snack = ({ name, price, onClick }) => (
  <div onClick={onClick}>
    <h3>{name}</h3>
    <p>Price: {price}</p>
  </div>
);

export default Snack;
