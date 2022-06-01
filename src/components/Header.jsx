import React from "react";

function Header({ inputItem, setInputItem, todos, setTodos }) {
  const writeItem = (event) => {
    setInputItem(event.target.value);
  };

  const submitItem = (event) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text: inputItem,
        completed: false,
      },
    ]);
    setInputItem("");
  };

  const useEnterKey = (event) => {
    console.log(event.charCode);
    if (event.charCode === 13) {
      submitItem();
    }
  };

  return (
    <>
      <section className="addItem">
        <input
          className="input"
          placeholder="Enter your task here"
          value={inputItem}
          onKeyPress={useEnterKey}
          onChange={writeItem}
          type="text"
        ></input>
        <button onClick={submitItem} className="add-button" input="submit">
          Add
        </button>
      </section>
    </>
  );
}

export default Header;
