import React, { useReducer } from 'react';
import { TodoReducer, initialState } from './reducers/TodoReducer';

const Todo = props => {

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <div
            onClick={() => dispatch({ type: 'TOGGLE_ITEM' })}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default Todo;