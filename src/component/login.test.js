import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";

test("renders login form correctly", () => {
  const { getByPlaceholderText, getByText } = render(<Login />);

  expect(getByPlaceholderText("Username")).toBeInTheDocument();
  expect(getByPlaceholderText("Password")).toBeInTheDocument();
  expect(getByText("Login")).toBeInTheDocument();
});

test("shows error message when fields are empty", () => {
  const { getByText } = render(<Login />);
  fireEvent.click(getByText("Login"));

  expect(getByText("Both fields are required.")).toBeInTheDocument();
});
