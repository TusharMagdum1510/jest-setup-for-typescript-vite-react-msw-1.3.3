import { render, screen } from "@testing-library/react";

import App from "./App";

describe("group", () => {
  it("should render greet", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
