import "./App.css";
import React from "react";
import Header from "./components/Header.jsx";
import ItemsInList from "./components/ItemsInList";

function App() {
  const [inputItem, setInputItem] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="App">
      <h1 className="Title">My ToDo list </h1>
      <Header
        todos={todos}
        setTodos={setTodos}
        inputItem={inputItem}
        setInputItem={setInputItem}
      />
      <ItemsInList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
