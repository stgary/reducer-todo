import React from 'react'

export default function TodoForm(props) {
   const { inputText, changeHandler, clearCompleted, submitHandler } = props;
    return (
        <div className='todo-form'>
            <div>
                <form className='form' onSubmit={submitHandler}>
                    <input 
                        className='form-input'
                        type='text'
                        placeholder='add todo...'
                        onChange={changeHandler}
                        value={inputText}
                    />
                    <button className='add-todo-btn' type='submit'>
                        Add Todo
                    </button>
                </form>
            </div>
            <button className='clear-btn' onClick={clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
}