export const ACTIONS = {
  ADD_TASK: 'add-task',
  TOGGLE_TASK: 'toggle-task',
  DELETE_TASK: 'delete-task',
  SET_FILTER: 'set-filter',
  SET_SEARCH: 'set-search', // NEW
  CLEAR_COMPLETED: 'clear-completed'
};

export const initialState = {
  tasks: [],
  filter: 'all',
  searchQuery: '' // NEW
};

export function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SEARCH:
      return { ...state, searchQuery: action.payload.query };
    
    // ... rest of the cases remain the same
    default:
      return state;
  }
}