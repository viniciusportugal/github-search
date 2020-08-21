import React from 'react'
import './_index.scss'

const SearchBar = (props) => (
    <input type="text" className="SearchBar" placeholder={props.placeholder} />
);

export default SearchBar;