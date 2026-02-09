import { useState } from "react";

let AddTodo = ({ addNewItem }) => {
  let [toDoName, setToDoName] = useState("");
  let [dueDate, setDueDate] = useState("");

  let handleNameChange = (event) => {
    setToDoName(event.target.value);

  };
  let handleDateChange = (event) => {
    setDueDate(event.target.value);
 
  };
  let handleAddButton = () => {

    addNewItem(toDoName, dueDate);
    setToDoName("");
    setDueDate("");
  };
  return (
    <>
      <div className="container ">
        <div className="row row2">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={toDoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success btn2"
              onClick={handleAddButton}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddTodo;
