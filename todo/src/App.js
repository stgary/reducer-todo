import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todo, setTodo] = useState([
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]);

  console.log(todo);

  const toggleItem = clickedItemId => {
    console.log(clickedItemId);
    setTodo({
      todo: todo.map(item => {
        if(item.id === clickedItemId) {
          return {
          ...item,
          completed: !item.completed
          };
        } else {
          return  item;
        }
      })
    });
  };

  const deleteItem = () => {
    todo.map(item => {
      if(item.completed === true) {
      todo.splice(item, 1);
      console.log(todo);
      setTodo({...item});
      }
    })
  }
   
  
  const addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    setTodo({
      todo: [...todo, newItem]
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addItem = {addItem} />
      <TodoList 
      todo={todo}
      toggleItem={toggleItem}
      deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
