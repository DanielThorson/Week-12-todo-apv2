import ToDo from "./ToDo.js";

//importing the single Totos further destructuring them and returning a
//.map over the todo object(task, id and completion value) which is assigned
//a component for the entire Todo list and exporting as ToDoList.js
//to import into App.js as a single component
const ToDoList = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
