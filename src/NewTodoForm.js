import React from "react";
import { v4 as uuid } from "uuid";


const NewTodoForm = ({ newToDo }) => {
  const [tast, setTask] = useState("");

  const performChange = (evt) => {
    setTask(evt.target.value);
  };

  const getInput = (evt) => {
    evt.preventDefault();
    newToDo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={getInput}>
        <label htmlFor="task"> Task:</label>
        <input
          id="task"
          name="task"
          type="task"
          onChange={performChange}
          value={task}
        />
        <button>Add a task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
