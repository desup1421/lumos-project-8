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
    const title = screen.getByText("Stories and interviews");
    expect(title).toBeInTheDocument();
    const description = screen.getByText(
      "Subscribe to learn about new product features, the latest in technology, solutions, and updates."
    );
    expect(description).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Subscribe" });
    expect(button).toBeInTheDocument();
  });

  it("cant type on form", async () => {
    render(
      <Provider store={store}>
        <SubscribeForm />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Enter your email");
    // Simulasi mengetik email
    userEvent.type(input, "test@example.com");
    await waitFor(() => expect(input).toHaveValue("test@example.com"));
  });
});
