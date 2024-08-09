import { describe, expect, test } from "vitest";
import Signup from "../../component/Signup";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Sign up form testing", () => {
  test("Email input textbox", () => {
    render(<Signup />);
    const textbox = screen.getByPlaceholderText("Enter email or phone");
    fireEvent.change(textbox, { target: { value: "vimalramk99@gmail.com" } });
    expect(textbox.value).toBe("vimalramk99@gmail.com");
    expect(textbox).toBeInTheDocument();
  });

  test("Email should be match email pattern", () => {
    render(<Signup />);
    const textbox = screen.getByPlaceholderText("Enter email or phone");
    fireEvent.change(textbox, { target: { value: "vimalramk99@gmail" } });
    fireEvent.blur(textbox);
    const emailAlert = screen.queryByRole("alert");
    expect(emailAlert).toBeInTheDocument();
  });

  test("Error should not visible in the DOM while input section focus", () => {
    render(<Signup />);
    const textbox = screen.queryByTestId("username");
    fireEvent.focus(textbox);
    const emailAlert = screen.queryByRole("alert");
    expect(emailAlert).not.toBeInTheDocument();
  });
});
