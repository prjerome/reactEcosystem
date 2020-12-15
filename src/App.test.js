import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

test('App component renders', () => {
    //Arrange & Act
    const renderOutput = render(<App/>)

    //Assert
    expect(renderOutput).toBeTruthy();
    screen.debug();
})