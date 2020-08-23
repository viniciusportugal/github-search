import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Repository from './index';

it('renders Repository component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Repository
            url="www.google.com"
            name="viniciusportugal"
            description="repository description"
            stars="3"
        />
    , div);
});

test('test if prop icon is rendering in Repository Component', () => {
    const { getByTestId } = render(<Repository
        url="www.google.com"
        name="viniciusportugal"
        description="repository description"
        stars="3"
    />);
    const RepositoryIcon = getByTestId('repository-link');
    expect(RepositoryIcon).toBeInTheDocument();
});

test('test if prop icon is rendering in Repository Component', () => {
    const { getByTestId } = render(<Repository
        url="www.google.com"
        name="viniciusportugal"
        description="repository description"
        stars="3"
    />);
    const RepositoryIcon = getByTestId('repository-name');
    expect(RepositoryIcon).toBeInTheDocument();
});

test('test if prop icon is rendering in Repository Component', () => {
    const { getByTestId } = render(<Repository
        url="www.google.com"
        name="viniciusportugal"
        description="repository description"
        stars="3"
    />);
    const RepositoryIcon = getByTestId('repository-description');
    expect(RepositoryIcon).toBeInTheDocument();
});

test('test if prop icon is rendering in Repository Component', () => {
    const { getByTestId } = render(<Repository
        url="www.google.com"
        name="viniciusportugal"
        description="repository description"
        stars="3"
    />);
    const RepositoryIcon = getByTestId('repository-starIcon');
    expect(RepositoryIcon).toBeInTheDocument();
});

test('test if prop icon is rendering in Repository Component', () => {
    const { getByTestId } = render(<Repository
        url="www.google.com"
        name="viniciusportugal"
        description="repository description"
        stars="3"
    />);
    const RepositoryIcon = getByTestId('repository-stars');
    expect(RepositoryIcon).toBeInTheDocument();
});
