import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItems";
import Empty from "./Components/Empty";
import "./App.css";
import { useState } from "react";
let App = () => {
  let initialList = [
    
  ];

  let [toDoItems, setToDoItems] = useState(initialList);

  const addNewItem = (name, dueDate) => {
    setToDoItems([...toDoItems, { toDoName: name, toDoDate: dueDate }]);
    // console.log(name+" hhhh "+ dueDate);
  };
  const deleteItem = (name) => {
   
   // let index=toDoItems.findIndex(toDoItems=>toDoItems.toDoName===name);
    let newList= toDoItems.filter(toDoItems=>toDoItems.toDoName!==name);
    setToDoItems(newList);
  };
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <div className="items-container">
          <AddTodo addNewItem={addNewItem}></AddTodo>
          {toDoItems.length === 0 ? (
            <Empty></Empty>
          ) : (
            <TodoItem toDoItems={toDoItems} deleteItem={deleteItem}></TodoItem>
          )}
        </div>
      </center>
    </>
  );
};
export default App;
