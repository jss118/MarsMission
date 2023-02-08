import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../Header";

afterEach(() => cleanup());

describe("Header component", () => {
  test("renders header div", () => {
    const { getByTestId } = render(<Header />);
    const headerDiv = getByTestId("header-div");
    expect(headerDiv).toBeInTheDocument();
  });

  test("renders header text", () => {
    const { getByTestId } = render(<Header />);
    const headerText = getByTestId("header-text");
    expect(headerText).toBeInTheDocument();
    expect(headerText.textContent).toBe("Interplanetary Priorities");
  });
});
