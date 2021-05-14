import React from 'react';
import './search-box.styles.css';


// If you don't need access to Lifecycle methods as well as state of component, then fuctional components are best to use for that purpose.
// Functional components are easier to test as well as understand.
// We never had state here, since we add state to that places where something changes.
// If you had a state of searchfeild here, then we would not be able to pass information to CardList for it to change.

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        // Dyanmic placeholder
        placeholder={placeholder}
        onChange={handleChange}
    />
);

export default SearchBox;