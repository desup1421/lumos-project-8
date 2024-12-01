/* eslint-disable no-undef */
import React from "react";
import { render, waitFor } from "@testing-library/react";
import MyHelmet from "../../components/MyHelmet";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

test("renders MyHelmet component with correct props", async () => {
  const title = "My Page Title";
  const description = "This is a test page.";
  const image = "https://example.com/image.jpg";
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    image: image,
  };
  render(
    <HelmetProvider>
      <Router>
        <MyHelmet
          title={title}
          desc={description}
          img={image}
          schema={schema}
        />
      </Router>
    </HelmetProvider>
  );
  await waitFor(() => {
    const helmet = document.head;
    expect(helmet.querySelector("title").textContent).toBe(title);
    expect(helmet.querySelector('meta[name="description"]').content).toBe(
      description
    );
  });
});
