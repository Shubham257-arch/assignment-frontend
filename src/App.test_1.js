import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';  // Add this import
import App from './App';  // Import the App component
import "@testing-library/jest-dom/extend-expect";
import * as test from "node:test";  // For better assertions

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  // Wrap App with Router
  );


  const linkElement = screen.getByText[/learn react/i];  // Ensure this text is part of your App
  expect(linkElement).toBeInTheDocument();  // Assert that the link is in the document
});
