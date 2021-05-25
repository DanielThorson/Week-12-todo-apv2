import { useForm } from "react-hook-form";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoInputForm from "./ToDoForm";
import "./App.css";
import data from "./data.json";

function App() {
  //this returns toDoList and a function (setToDoList) to update it. the state is set
  //pull "data" from the datajson file
  const [toDoList, setToDoList] = useState(data);

  //this adds a function to add more todos
  const addToDo = (todoInput) => {
    let copy = [...toDoList];
    //copy is going to be spreading each todo id per the length of toDoList
    //plus one everytime and also adding the task (description) per the todoinput text
    copy = [...copy, { id: toDoList.length + 1, task: todoInput }];
    //and then setting setToDOList to the copy array of todo ojects
    setToDoList(copy);
  };

  return (
    //passing toDoList as a prop into ToDoList component and passing adToDo as a prop
    //into ToDoInputForm component
    <div className="App background">
      <div className="container">
        <h1 className="font-face-sj yellow-color">Lord Vader's ToDo List</h1>
        <ToDoInputForm addToDo={addToDo} />
        <ToDoList toDoList={toDoList} />
      </div>
    </div>
  );
}

export default App;
