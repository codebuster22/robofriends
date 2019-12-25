import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchField, searchChange}) => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="custom-input" placeholder="Find Friends"
                   aria-label="Find Friends" aria-describedby="button-addon2" onChange={searchChange}>
            </input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
        </div>
    )
};

export default SearchBar;