import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App"

describe('App', () => {
  test('renders App component', () => {
    // excercise and verification in one
   render(<App />);

   expect(screen.getByText('Hello World')).toBeInTheDocument();

    screen.debug();
  })
})