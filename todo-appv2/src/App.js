import { useForm } from "react-hook-form";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoInputForm from "./ToDoForm";
import "./App.css";
import data from "./data.json";

function App() {
  //this returns the state toDoList and a function (setToDoList) to update it
  const [toDoList, setToDoList] = useState(data);
  //this adds a function to add todo
  const addToDo = (todoInput) => {
    let copy = [...toDoList];
    //copy is going to be spreading each todo id per the length of toDoList
    //plus one evrytime and also adding the task (description) per the todoinput text
    copy = [...copy, { id: toDoList.length + 1, task: todoInput }];
    setToDoList(copy);
  };

  return (
    //passing toDoList as a prop into ToDoList component and setting it as a callback
    <div className="App background">
      <div className="container">
        <h1 className='font-face-sj yellow-color'>Lord Vader's ToDo List</h1>
        <ToDoInputForm addToDo={addToDo} />
        <ToDoList toDoList={toDoList} />
      </div>
    </div>
  );
}

export default App;
