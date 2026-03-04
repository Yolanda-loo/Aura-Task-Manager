// Action Types (to prevent typos)
export const ACTIONS = {
  ADD_TASK: 'add-task',
  TOGGLE_TASK: 'toggle-task',
  DELETE_TASK: 'delete-task',
  SET_FILTER: 'set-filter',
  CLEAR_COMPLETED: 'clear-completed'
};

export function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [
          {
            id: crypto.randomUUID(), // Generates a clean, unique ID
            text: action.payload.text,
            priority: action.payload.priority || 'medium',
            isCompleted: false,
            createdAt: new Date().toISOString()
          },
          ...state.tasks
        ]
      };

    case ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id 
            ? { ...task, isCompleted: !task.isCompleted } 
            : task
        )
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };

    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter // 'all' | 'pending' | 'completed'
      };

    case ACTIONS.CLEAR_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.isCompleted)
      };

    default:
      return state;
  }
}
