import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todo.map((item, index) => (
            <Todo 
                key={index}
                item={item}

            />
            ))}
            <button onClick={props.deleteItem}>Delete</button>
        </div>
    );
};

export default TodoList;