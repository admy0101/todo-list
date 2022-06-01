import React from "react";

const TodoItems = ({ completed, text, todo, todos, setTodos }) => {
  function deleteItem() {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  function completeItem() {
    const checkComplete = todos.map((item) => {
      console.log(completed);
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodos(checkComplete);
  }

  return (
    <section className="new-item">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-button" onClick={completeItem}>
        ✔️
      </button>
      <button className="delete-button" onClick={deleteItem}>
        ✘
      </button>
    </section>
  );
};

export default TodoItems;
