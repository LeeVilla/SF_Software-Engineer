import React from "react";

const Box = ({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "blue",
}) => {
  return (
    <div>
      <div
        style={{ height: `${height}em`, width: `${width}em`, backgroundColor }}
      />
      <button onClick={remove}>Remove Box</button>
    </div>
  );
};

export default Box;
