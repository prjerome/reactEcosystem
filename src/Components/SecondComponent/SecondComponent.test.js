/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import SecondComponent from './
SecondComponent'

import userEvent from '@testing-library/user-event'

test('given there is a SecondComponent, when it renders, then it does not throw', () => {
  expect(render(<SecondComponent />)).toBeTruthy()

  screen.debug()
})

test('given when the Second Component renders, then the screen contains the text Hello World', () => {
  render(<SecondComponent />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

test("given when the Second Component renders, then the screen does not contain the text 'Goodbye World'", () => {
  // Arrange and Act
  render(<SecondComponent />)

  // Assert
  expect(screen.queryByText('Goodbye World')).not.toBeInTheDocument()
})

test("given there is a sign in button, when the user has not signed in, then there is a button with the text 'Sign in'", () => {
  render(<SecondComponent />)
  expect(screen.getByRole('button', { name: /Sign in/ })).toBeInTheDocument()
})

test("given there is a user, when the clicks the 'Sign in' button, the screen contains the text 'Signed in as'", async () => {
  render(<SecondComponent />)

  screen.debug();
  
  expect(screen.queryByText(/Signed in as/)).not.toBeInTheDocument()
  expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
})

()

/* test("given there is a user, when the user signs into the app, then the user gets feedback", async () => {
  render(<SecondComponent />);
  expect(screen.getByText(/Signed in as/)).toBeNull();
  expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
}); */
