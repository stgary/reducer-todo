import React, { useState, useReducer } from 'react';
import { v4 as uuid } from 'uuid'
import { initialState, todoReducer } from './reducers/todoReducer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
const [inputText, setInputText] = useState('');
const [state, dispatch] = useReducer(todoReducer, initialState);
console.log(state)

const changeHandler = e => {
  setInputText(e.target.value)
}

const submitHandler = e => {
  e.preventDefault();

  dispatch({ 
    type: 'SUBMIT_TODO', 
    payload: {
      id: uuid(),
      completed: false,
      task: inputText
    } 
  })

  setInputText('');

}

const deleteTodo = id => {
  dispatch({ type: "DELETE_TODO", payload: id });
};

const toggleCompleted = id => {
  dispatch({ type: "TOGGLE_COMPLETED", payload: id });
};

const clearCompleted = () => {
  dispatch({ type: "CLEAR_COMPLETED" });
};

  return (
    <div className='container'>
      <h6>TODO LIST</h6>
      <TodoForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputText={inputText}
        clearCompleted={clearCompleted}
      />
      <TodoList
        todos={state.todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;
