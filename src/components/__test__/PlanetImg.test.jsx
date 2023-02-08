import React from "react";
import { render, waitForElement, cleanup } from "@testing-library/react";
import PlanetImg from "../PlanetImg";

afterEach(() => cleanup());

test("loads an image", async () => {
  const { getByAltText } = render(<PlanetImg />);
  const imgElement = await waitForElement(() =>
    getByAltText("The red planet.")
  );
  expect(imgElement).toBeInTheDocument();
});
