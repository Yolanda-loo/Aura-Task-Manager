import React, { useReducer, useEffect } from 'react';
import { taskReducer, ACTIONS } from './state/taskReducer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './styles/index.css';

const initialState = {
  tasks: [], // We start empty for a clean slate
  filter: 'all'
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // 💡 Smart UX: Persist tasks to Local Storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('aura_tasks'));
    if (savedTasks) {
      savedTasks.forEach(task => {
        dispatch({ type: ACTIONS.ADD_TASK, payload: task });
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('aura_tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  // Calculate stats for the Header
  const completedCount = state.tasks.filter(t => t.isCompleted).length;
  const totalCount = state.tasks.length;

  return (
    <div className="aura-app-container">
      <header className="app-header">
        <h1>Aura <span>Task Manager</span></h1>
        <div className="stats-badge">
          {completedCount} / {totalCount} Done
        </div>
      </header>

      <main className="app-content">
        <TaskForm dispatch={dispatch} />
        
        <div className="view-controls">
          <TaskFilter currentFilter={state.filter} dispatch={dispatch} />
        </div>

        <TaskList 
          tasks={state.tasks} 
          filter={state.filter} 
          dispatch={dispatch} 
        />
      </main>

      <footer className="app-footer">
        <p>Built with React & useReducer • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;