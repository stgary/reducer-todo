import React, { useState } from 'react';

function TodoForm(props) {

    const [item, setItem] = useState('');
    console.log(item);

    const handleChanges = e => {
        setItem(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addItem(item);
        setItem(item);
    };
  
    return (
      <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input 
                id="task"
                name="task"
                type="text"
                value={item}
                onChange={handleChanges}
            />
            <button>Add Item</button>
        </form>
      </div>
    );
  }

  export default TodoForm;