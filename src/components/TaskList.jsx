import React from 'react';
import TaskItem from './TaskItem';
import { ACTIONS } from '../state/actions';

const TaskList = ({ tasks, filter, dispatch }) => {
  
  // 🔍 Logic: Filter tasks before mapping them
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'pending') return !task.isCompleted;
    return true; // 'all'
  });

  // Empty State UX: Better than a blank screen!
  if (filteredTasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No {filter !== 'all' ? filter : ''} tasks found. Time to relax? ☕</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="list-header">
        <span>Showing: <strong>{filter.toUpperCase()}</strong></span>
        <button 
          onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}
          className="clear-btn"
        >
          Clear Completed
        </button>
      </div>

      <div className="items-container">
        {filteredTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            dispatch={dispatch} 
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;