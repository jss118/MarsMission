import React from "react";
import { render } from "@testing-library/react";
import AppBody from "../AppBody";

describe.skip("AppBody component", () => {
  test("renders without crashing", () => {
    const { container } = render(<AppBody />);
    expect(container).toBeTruthy();
  });
});
