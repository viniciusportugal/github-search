import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ErrorMessage from './index';

it('renders ErrorMessage component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorMessage error={404} />, div);
});

test('test if prop icon is rendering in ErrorMessage Component', () => {
    const { getByTestId } = render(<ErrorMessage error={404} />);
    const errorMessageIcon = getByTestId('ErrorMessage-icon');
    expect(errorMessageIcon).toBeInTheDocument();
});

test('test if prop icon is rendering in ErrorMessage Component', () => {
    const { getByTestId } = render(<ErrorMessage error={404} />);
    const errorMessageIcon = getByTestId('ErrorMessage-title');
    expect(errorMessageIcon).toBeInTheDocument();
});

test('test if prop icon is rendering in ErrorMessage Component', () => {
    const { getByTestId } = render(<ErrorMessage error={505} />);
    const errorMessageIcon = getByTestId('ErrorMessage-message');
    expect(errorMessageIcon).toBeInTheDocument();
});
