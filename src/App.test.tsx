import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app should render autocomplete component', () => {
  render(<App />);
  const autocompleteComponent = screen.getByTestId('autocomplete-component')
  expect(autocompleteComponent).toBeInTheDocument();
});
