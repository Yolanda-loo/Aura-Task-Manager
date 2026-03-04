import React, { useReducer } from 'react';
import { taskReducer, ACTIONS } from './taskReducer';

const initialState = {
  tasks: [], // Start empty or with the mock data from before
  filter: 'all'
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Example: Adding a task
  const addTask = (text, priority) => {
    dispatch({ type: ACTIONS.ADD_TASK, payload: { text, priority } });
  };

  return (
    <div className="aura-app">
      {/* Your components go here */}
    </div>
  );
}
