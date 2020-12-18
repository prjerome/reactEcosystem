import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import SecondComponent from './SecondComponent';

test('given there is a SecondComponent, when it renders, then it does not throw', () => {
   
    expect(render(<SecondComponent/>)).toBeTruthy();

    screen.debug();

    });

    test('given when the Second Component renders, then the screen contains the text "Hello World', () => {
        render(<SecondComponent />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    })