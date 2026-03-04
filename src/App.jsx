import React, { useReducer, useEffect } from 'react';
import { taskReducer, initialState, ACTIONS } from './state/taskReducer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import SearchBar from './components/SearchBar'; // NEW
import './styles/index.css';

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Sync with LocalStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('aura_tasks'));
    if (saved) {
      saved.forEach(task => dispatch({ type: ACTIONS.ADD_TASK, payload: task }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('aura_tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <div className="aura-app-container">
      <header className="app-header">
        <h1>Aura <span>Task Manager</span></h1>
        <div className="stats-badge">
          {state.tasks.filter(t => t.isCompleted).length} / {state.tasks.length} Done
        </div>
      </header>

      <main className="app-content">
        <SearchBar searchQuery={state.searchQuery} dispatch={dispatch} />
        
        <TaskForm dispatch={dispatch} />
        
        <div className="view-controls">
          <TaskFilter currentFilter={state.filter} dispatch={dispatch} />
        </div>

        <TaskList 
          tasks={state.tasks} 
          filter={state.filter} 
          searchQuery={state.searchQuery} // NEW
          dispatch={dispatch} 
        />
      </main>
    </div>
  );
}

export default App;