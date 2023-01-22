import React from "react";

const App = () => {
  return (
    <div>
      <Tweet
        name="Tim Jordan"
        username="Big Timmy"
        message="Big Timmy says HODOR!"
        date={new Date().toDateString()}
      />
      <Tweet
        name="Jim John Jacobs"
        username="Jokin Jay"
        message="Jam in my jammies"
        date={new Date().toDateString()}
      />
      <Tweet
        name="Betsie Bakersmith"
        username="Biscuits1292"
        message="Big Timmy says HODOR!"
        date={new Date().toDateString()}
      />
    </div>
  );
};

export default App;
