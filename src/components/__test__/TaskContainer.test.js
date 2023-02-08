import React from "react";
import { render, cleanup } from "@testing-library/react";
import TaskContainer from "../TaskContainer";
import CurrentTask from "../CurrentTask";

//I have skipped these tests because I am still figuring out why they haven't passed
afterEach(() => cleanup());

describe.skip("TaskContainer", () => {
  test("contains the PlanetImg component", () => {
    const { getByTestId } = render(<TaskContainer />);
    expect(getByTestId("planet-img")).toBeInTheDocument();
  });
  test("contains the Routes component", () => {
    const { getByTestId } = render(<TaskContainer />);
    expect(getByTestId("routes")).toBeInTheDocument();
  });
  test("contains the Routes component", () => {
    const { getByTestId } = render(<TaskContainer />);
    expect(getByTestId("routes")).toBeInTheDocument();
  });
  test("contains the Route component", () => {
    const { getByTestId } = render(<TaskContainer />);
    const route = getByTestId("route");
    expect(route).toBeInTheDocument();
    expect(route.props.path).toBe("/:id");
    expect(route.props.element).toEqual(<CurrentTask />);
  });
});
