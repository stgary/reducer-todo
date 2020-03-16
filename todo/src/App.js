import React, { useState, useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoReducer, initialState } from './components/reducers/TodoReducer';

function App() {

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  console.log(state);

  // const toggleItem = clickedItemId => {
  //   console.log(clickedItemId);
  //   setTodo(todo.map(item => {
  //       if(item.id === clickedItemId) {
  //         return {
  //         ...item,
  //         completed: !item.completed
  //         };
  //       } else {
  //         return  item;
  //       }
  //     })
  //   );
  // };

  const deleteItem = () => {
    state.map(item => {
      if(item.completed === true) {
      state.splice(item, 1);
      console.log(state);
      // setTodo([...item]);
      }
    })
  }
   
  const addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    // setTodo([...state, newItem]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addItem = {addItem} />
      <TodoList 
      todo={state}
      // toggleItem={toggleItem}
      deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
