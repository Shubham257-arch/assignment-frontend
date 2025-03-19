// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import Signup from "./Signup"; // Assuming Signup component is in Signup.js
// import { MemoryRouter, Routes, Route } from "react-router-dom"; // Using Routes and Route for v6
//
// // Test the Signup component
// test("renders Signup form and submits it", () => {
//   const navigate = jest.fn(); // Mock the navigate function
//
//   render(
//     <MemoryRouter initialEntries={["/Signup"]}>
//       <Routes>
//         <Route
//           path="/Signup"
//           element={<Signup navigate={navigate} />} // Pass navigate as a prop to your component
//         />
//         <Route path="/welcome" element={<div>NoteList Page</div>} />
//       </Routes>
//     </MemoryRouter>
//   );
//
//   // Get the form fields and button
//   const nameInput = screen.getByLabelText(/name/i);
//   const passwordInput = screen.getByLabelText(/password/i);
//   const submitButton = screen.getByText(/sign up/i);
//
//   // Simulate user typing in the inputs
//   fireEvent.change(nameInput, { target: { value: "John Doe" } });
//   fireEvent.change(passwordInput, { target: { value: "password123" } });
//
//   // Simulate form submission
//   fireEvent.click(submitButton);
//
//   // After the form is submitted, check that the navigate function was called with "/welcome"
//   expect(navigate).toHaveBeenCalledWith("/welcome");
// });


import Signup from "./Signup";
import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import navigate from 'react-router-dom';
//import expect from '@testing-library/jest-dom/extend-expect';
import {screen} from "@testing-library/react";

describe('Signup component', () => {
    it('should render the signup form', () => {
        render(<Signup />);
        const nameInput = screen.getByLabelText(/Name/i);
    });
})