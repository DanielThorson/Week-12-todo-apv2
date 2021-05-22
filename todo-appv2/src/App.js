import { useForm } from "react-hook-form";
import React, { useState } from "react";

//components
import Header from "./Header";
import ToDoList from "./ToDoList";

//css
import "./App.css";

//data from array of objects in the format of
//"id": and "task": and "completion":
import data from "./data.json";
function App() {
  //this returns the state toDoList and a function (setToDoList) to update it
  const [toDoList, setToDoList] = useState(data);
  console.log(toDoList);

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
