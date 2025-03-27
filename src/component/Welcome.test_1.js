import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // For routing support
import NoteList from "./NoteList"; // Assuming NoteList component is in NoteList.js

test("renders NoteList page", () => {
  render(
    <MemoryRouter initialEntries={["/welcome"]}>
      <NoteList />
    </MemoryRouter>
  );

  // Check if the content on the NoteList page is rendered
  expect(screen.getByText(/NoteList to the second page!/i)).toBeInTheDocument();
  expect(screen.getByText(/This is where you can display some content after successful signup./i)).toBeInTheDocument();
});
