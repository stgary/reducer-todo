import React from 'react';

export default function Todo(props) {
    const { deleteTodo, toggleCompleted } = props;
    let {
        todo: {
            todo: { task, id, completed }
        }
    } = props;
    
    return (   
      <div className={`todo-${completed ? 'completed' : ''}`}>
         <p 
            onClick={() => {
               toggleCompleted(id);
            }}   
         >
            {task}
         </p> 
         <div>
            <button 
               className='delete-todo-btn'
               onClick = {() => {
                  deleteTodo(id);
               }}
               >
                  Delete
               </button>
         </div>      
      </div>
    );
}