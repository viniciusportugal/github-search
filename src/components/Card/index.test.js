import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Card from './index';


it('renders Card component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
});

test('test if Card is rendering its children correctly', () => {
    const { getByTestId } = render(
        <Card>
            <p data-testid="childElement">this is a simple text</p>
        </Card>
    );
    const childElement = getByTestId('childElement');
    expect(childElement).toBeInTheDocument();
});
