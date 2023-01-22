import React from "react";

const App = () => {
  return (
    <div>
      <Person
        name="Homer"
        age={38}
        hobbies={["karate", "horse racing", "snowboarding"]}
      />
      <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
      <Person name="Bart" age={10} hobbies={["archery", "fishing"]} />
      <Person
        name="Lisa"
        age={8}
        hobbies={["reading", "saxophone", "snapchat"]}
      />
    </div>
  );
};

export default App();
