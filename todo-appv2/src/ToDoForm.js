import React, { useState } from "react";

// //the input state is set to nothing with the ""
// //again a variable (todoInput) and a function (setTodoInput) to update it
const ToDoForm = ({ addToDo }) => {
  const [todoInput, setTodoInput] = useState("");

  //event is triggered when values are entered in the input.
  const handleChange = (event) => {
    setTodoInput(event.currentTarget.value);
  };

  // gets current value of state
  const handleSubmit = (event) => {
    event.preventDefault();
    addToDo(todoInput);
    setTodoInput("");
    // console.log(todoInput);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={todoInput} type="text" onChange={handleChange} required />
      <button className="font-face-so">Submit</button>
    </form>
  );
};

export default ToDoForm;
