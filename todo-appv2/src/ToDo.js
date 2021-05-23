//This is a component for destructuring the data from the json to a single "todo"
//which encapsulates each todo with the #1-todo id, #2-task description
//And then giving it a prop of .task and making it return a ul item with just
//the task description.

const ToDo = ({ todo }) => {
  // console.log("Task description:",todo.task);
  // console.log("Task id:",todo.id);

  return (
    <div>
      <ul>
        <li>{todo.task}</li>
      </ul>
    </div>
  );
};
//exporting this to be imported into ToDoList
export default ToDo;
