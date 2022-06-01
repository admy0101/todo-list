import React from "react";
import TodoItems from "./TodoItems";

function ItemsInList({ todos, setTodos }) {
  return (
    <ul className="items-todo">
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
}

export default ItemsInList;
