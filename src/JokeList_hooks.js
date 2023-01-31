import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList";

function JokeListWithHooks({ numOfJokes = 5 }) {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getJokes() {
      let j = [...jokes];
      let viewedJoke = new Set();
      try {
        while (j.length < numOfJokes) {
          let res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" },
          });
          let { ...jokeObj } = res.data;
          if (!viewedJoke.has(jokeObj.id)) {
            viewedJoke.add(jokeObj.id);
            j.push({ ...jokeObj, votes: 0 });
          } else {
            alert.error("Duplicate joke found");
          }
        }

        setJokes(j);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    if (jokes.length === 0) getJokes();
  }, [jokes, numOfJokes]);

  function newJokes() {
    setJokes([]);
    setLoading(true);
  }

  function vote(id, delta) {
    setJokes((allJokes) =>
      allJokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  }
  if (loading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);
  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map(({ joke, id, votes }) => (
        <Joke text={joke} key={id} id={id} votes={votes} vote={vote} />
      ))}
    </div>
  );
}

export default JokeListWithHooks;
