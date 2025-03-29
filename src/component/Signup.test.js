import Signup from "./Signup";
import { render, screen , fireEvent} from "@testing-library/react";
import React from "react";
import {useNavigate} from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"; // Ensures better assertions


describe ("Signup component", () => {
    it("should render the signup form", () => {
        render(<Signup />);
        const nameInput = screen.getByLabelText[/Name/i];
          fireEvent.change(nameInput, { target: { value: 'John' } });
    });

const navigate = useNavigate();
navigate('/welcome');  // This will navigate to /welcome when the form is submitted

});

