import React from 'react';
import { ACTIONS } from '../state/actions';

const TaskFilter = ({ currentFilter, dispatch }) => {
  const filters = ['all', 'pending', 'completed'];

  return (
    <div className="filter-container">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${currentFilter === f ? 'active' : ''}`}
          onClick={() => dispatch({ type: ACTIONS.SET_FILTER, payload: { filter: f } })}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;