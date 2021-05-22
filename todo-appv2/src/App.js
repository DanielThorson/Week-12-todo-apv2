import { useForm } from "react-hook-form";
import React, { useState } from "react";

//components
import Header from "./Header";
import ToDoList from "./ToDoList";

//css
import "./App.css";

//data
import data from "./data.json";

function App() {
  const [toDoList, setToDoList] = useState(data);

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
