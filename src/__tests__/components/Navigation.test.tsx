// src/__tests__/components/Navigation.test.tsx
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";
import Navigation from "../../component/Navigation";

import "@testing-library/jest-dom";
import {
  MemoryRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

describe("Render Navigation", () => {
  test("LinkedIcon Render", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const linkedinIcon = screen.getByRole("mainlogo", { hidden: true });
    expect(linkedinIcon).toBeInTheDocument();
  });

  test("SearchBar", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const searchBar = screen.getByPlaceholderText("Search") as HTMLInputElement;
    expect(searchBar).toBeInTheDocument();

    fireEvent.change(searchBar, { target: { value: "test query" } });
    expect(searchBar.value).toBe("test query");
  });

  test("Chat Icon", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const chat = screen.getByRole("button");
    fireEvent.click(chat);
  });

  test("Chat icon navigate to /chats", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route
            path="/chats"
            element={<div role="main-chat">Chat Page</div>}
          />
        </Routes>
      </MemoryRouter>
    );

    const chatIcon = screen.getByRole("button", { name: "chat/i" });
    fireEvent.click(chatIcon);
    await waitFor(() => {
      expect(screen.getByRole("main-chat")).toBeInTheDocument();
    });
  });
});
