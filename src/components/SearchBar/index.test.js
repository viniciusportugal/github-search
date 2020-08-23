import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './index';

it('renders SearchBar component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
});