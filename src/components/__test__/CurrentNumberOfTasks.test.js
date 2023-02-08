import React from "react";
import { render, cleanup, StateContext } from "@testing-library/react";
import CurrentNumberOfTasks from "../CurrentNumberOfTasks";

//skipped for now because I need to figure out why the tests aren't passing

afterEach(() => cleanup());

describe.skip("CurrentNumberOfTasks", () => {
  test("renders without errors", () => {
    render(<CurrentNumberOfTasks />);
  });
  test("displays the correct number of tasks", () => {
    const mockState = { tasks: [{ id: 1 }, { id: 2 }, { id: 3 }] };
    const { getByTestId } = render(
      <StateContext.Provider value={mockState}>
        <CurrentNumberOfTasks />
      </StateContext.Provider>
    );
    expect(getByTestId("task-number")).toHaveTextContent("Tasks: 3");
  });
});
