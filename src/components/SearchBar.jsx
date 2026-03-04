import React from 'react';
import { ACTIONS } from '../state/actions';

const SearchBar = ({ searchQuery, dispatch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => dispatch({ 
          type: ACTIONS.SET_SEARCH, 
          payload: { query: e.target.value } 
        })}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;