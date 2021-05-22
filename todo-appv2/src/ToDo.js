//This is a component for destructuring the data from the json to a single "todo"
//which encapsulates each todo with the #1-todo id, #2-task description
//and #3-a completion value of either true or false.
//And then giving it a prop of .task and making it return a div with just
//the task description. It could be "todo.id" to return the id numbers
const ToDo = ({ todo }) => {
  console.log("Task description:",todo.task);
  console.log("Task id:",todo.id);
  return <div>{todo.task}</div>;
};

//exporting this to be imported into ToDoList
export default ToDo;
