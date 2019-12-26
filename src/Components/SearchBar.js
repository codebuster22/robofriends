import React from 'react';
import './CSS/SearchBar.css';

const SearchBar = ({searchField, searchChange}) => (
        <div className="input-group mb-3">
            <input type="text" className="custom-input" placeholder="Find Friends"
                   aria-label="Find Friends" aria-describedby="button-addon2" onChange={searchChange}/>
        </div>
    );

export default SearchBar;