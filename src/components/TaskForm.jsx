import React, { useState } from 'react';
import { ACTIONS } from '../state/actions';

const TaskForm = ({ dispatch }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Don't add empty tasks
    if (!text.trim()) return;

    // Send the data to our Reducer "Brain"
    dispatch({ 
      type: ACTIONS.ADD_TASK, 
      payload: { text, priority } 
    });

    // Reset the form
    setText('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-group">
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="task-input"
        />
        
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
          className={`priority-select ${priority}`}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" className="add-button">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;