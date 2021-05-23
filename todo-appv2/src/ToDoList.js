import ToDo from "./ToDo.js";

//importing the single Todos further destructuring them and returning a
//.map over the todo object(task and id) which is assigned
//a component for all the todos into a single Todo list and exporting it
//to import into App.js as a single component
//assigning the prop 'todo'
const ToDoList = ({ toDoList }) => {
  return (
    <div className="App inline font-face-sj yellow-color light-glow todo-cell padding-bottom">
      <div>
        {toDoList.map((todo) => {
          return <ToDo todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
