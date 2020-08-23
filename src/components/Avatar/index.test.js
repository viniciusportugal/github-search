import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Avatar from './index';

import GithubLogo from '../../assets/images/github.png';

it('renders Avatar component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar />, div);
});

test('test if prop text is rendering in Avatar Component', () => {
    const { getByTestId } = render(<Avatar text="vinicius almeida"/>);
    const linkElement = getByTestId('avatar-text');
    expect(linkElement).toBeInTheDocument();
});

test('test if image is rendering in Avatar Component', () => {
    const { getByTestId } = render(<Avatar src={GithubLogo}/>);
    const linkElement = getByTestId('avatar-image');
    expect(linkElement).toBeInTheDocument();
});
