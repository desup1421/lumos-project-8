/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";
import { BrowserRouter as Router } from "react-router-dom";

describe("Card", () => {
  // Data dummy for testing
  const post = {
    key: "1",
    thumb: "https://example.com/image.jpg",
    time: "2022-01-01",
    title: "Example Title",
    desc: "Example Description",
    tag: "Example Tag",
  };
  // Class name for testing
  const className = "example-class";

  it("renders the Card component with the correct props", () => {
    // Render the Card component
    render(
      <Router>
        <Card post={post} className={className} />
      </Router>
    );

    //  Image should be visible
    const image = screen.getByAltText("Example Title");
    expect(image).toBeInTheDocument();

    // Title should be visible
    const title = screen.getByText("Example Title");
    expect(title).toBeInTheDocument();

    // Description should be visible
    const description = screen.getByText("Example Description");
    expect(description).toBeInTheDocument();

    // Tag should be visible
    const tag = screen.getByText("Example Tag");
    expect(tag).toBeInTheDocument();

    // Arrow icon should be visible
    const arrowIcon = screen.getByAltText("arrow up rigt icon");
    expect(arrowIcon).toBeInTheDocument();
  });

  it("navigates to the correct route when clicked", () => {
    render(
      <Router>
        <Card post={post} className={className} />
      </Router>
    );

    // Click on the card should navigate to the correct route
    const card = screen.getByText("Example Title");
    card.click();
    expect(window.location.pathname).toBe("/blog/1");
  });
});
