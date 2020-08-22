import React from 'react'
import './_index.scss'

const SearchBar = (props) => (
    <input
        type="text"
        className="SearchBar"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
    />
);

export default SearchBar;