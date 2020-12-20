import React from "react";
import { render, screen } from "@testing-library/react";
import SecondComponent from "./SecondComponent";

test("given there is a SecondComponent, when it renders, then it does not throw", () => {
  expect(render(<SecondComponent />)).toBeTruthy();

  screen.debug();
});

test("given when the Second Component renders, then the screen contains the text Hello World", () => {
  render(<SecondComponent />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("given when the Second Component renders, then the text is within a button", () => {
  render(<SecondComponent />);
  //now an explicit test, instead of implicit. Compare with prev commit for diff.
  expect(screen.getByRole("button", { hidden: true })).toBeInTheDocument();
});

test('given when the Second Component renders, then the screen does not contain the text "Goodbye World"', () => {
  // Arrange and Act
  render(<SecondComponent />);

  // Assert
  expect(screen.queryByText("Goodbye World")).toBeNull();
});

test("given there is a user, when the user signs into the app, then the user gets feedback", async () => {
  render(<SecondComponent />);
  expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
});
