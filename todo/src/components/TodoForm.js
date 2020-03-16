
import React, { useContext } from "react";

export default function TodoForm(props) {
  const { inputText, changeHandler, clearCompleted } = props;
  return (
    <div className="TodoForm">
      <div>
        <form className="form" onSubmit={props.submitHandler}>
          <input
            className="form-input"
            type="text"
            placeholder="add todo..."
            onChange={changeHandler}
            value={inputText}
          ></input>
          <button className="add-todo-btn" type="submit">
            Add Todo
          </button>
        </form>
      </div>

      <button className="clear-completed-btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}