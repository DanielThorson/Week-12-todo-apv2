import React, { useState } from "react";

// //the input state is set to nothing with the ""
// //again a state and a function setTodoInput to update it

const ToDoForm = ({ addToDo }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (todoiteration) => {
    setTodoInput(todoiteration.currentTarget.value);
  };

  const handleSubmit = (todoiteration) => {
    todoiteration.preventDefault();
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
