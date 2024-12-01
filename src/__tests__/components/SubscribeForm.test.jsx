/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SubscribeForm from "../../components/SubscribeForm";
import { Provider } from "react-redux";
import store from "../../redux/store";
import userEvent from "@testing-library/user-event";

describe("SubscribeForm", () => {
  it("renders the component", () => {
    render(
      <Provider store={store}>
        <SubscribeForm />
      </Provider>
    );
    // Title should be visible
    const title = screen.getByText("Stories and interviews");
    expect(title).toBeInTheDocument();

    // Description should be visible
    const description = screen.getByText(
      "Subscribe to learn about new product features, the latest in technology, solutions, and updates."
    );
    expect(description).toBeInTheDocument();

    // Input and button should be visible
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();

    // Button should be visible
    const button = screen.getByRole("button", { name: "Subscribe" });
    expect(button).toBeInTheDocument();
  });

  it("cant type on form", async () => {
    render(
      <Provider store={store}>
        <SubscribeForm />
      </Provider>
    );

    // Type on form
    const input = screen.getByPlaceholderText("Enter your email");
    userEvent.type(input, "test@example.com");
    await waitFor(() => expect(input).toHaveValue("test@example.com"));
  });
});
