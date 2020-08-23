import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';

it('test if Button component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
});
