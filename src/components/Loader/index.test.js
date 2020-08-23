import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './index';

it('renders Loader component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader />, div);
});
