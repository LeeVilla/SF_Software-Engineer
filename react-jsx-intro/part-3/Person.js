import React from "react";
const MAX_NAME_LENGTH = 6;

const Person = ({ name, age, hobbies }) => {
  const voteTxt = age >= 18 ? "Please Go Vote!" : "You Must Be 18!";

  const hobbiesLIs = hobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name : {name.slice(0, MAX_NAME_LENGTH)} </li>
        <li>Age : {age}</li>
      </ul>
      <ul>
        Hobbies:
        {hobbiesLIs}
      </ul>
    </div>
  );
};

export default Person;
