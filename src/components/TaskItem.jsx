import React from 'react';
import { ACTIONS } from '../state/actions';

const TaskItem = ({ task, dispatch }) => {
  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''} priority-${task.priority}`}>
      <div className="task-content">
        <input 
          type="checkbox" 
          checked={task.isCompleted} 
          onChange={() => dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } })}
        />
        <span className="task-text">{task.text}</span>
      </div>

      <div className="task-actions">
        <span className="badge">{task.priority}</span>
        <button 
          className="delete-btn"
          onClick={() => dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } })}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;