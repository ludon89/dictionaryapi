import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../src/components/LoginForm";

describe("LoginForm component", () => {
  test("can submit the form with correct values", () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <LoginForm onSubmit={handleSubmit} />
    );

    fireEvent.change(getByLabelText("Email address:"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(getByLabelText("Password:"), {
      target: { value: "password" },
    });

    fireEvent.click(getByText("Log in"));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password",
    });
  });
});