import Item from "./Item";
import Empty from "./Empty";
let TodoItem = ({toDoItems,deleteItem}) => {
  

  return (
    <>
      {
      
      (toDoItems.length===0) ?<Empty></Empty>:

      toDoItems.map((Items) => (
        <Item
          key={Items.toDoName}
          Name={Items.toDoName}
          Date={Items.toDoDate}
          deleteItem={deleteItem}
        ></Item>
      ))}
    </>
  );
};
export default TodoItem;
