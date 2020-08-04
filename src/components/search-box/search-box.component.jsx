import React from 'react';
import './search-box.styles.css';

// a functional componenet just has some props and returns some HTML
// whereas class components have lifecycle methods and internal state
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}
    />
)