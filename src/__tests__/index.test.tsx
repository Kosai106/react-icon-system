import React from "react";
import { render } from "@testing-library/react";

import Icon from "../index";

describe("useBlocks", () => {
  beforeEach(() => {
    jest.resetModules(); // most important - it clears the cache
    process.env.REACT_APP_ICON_PATH = "src/images/icons";
  });

  it("renders without crashing", () => {
    render(<Icon src="" />);
  });

  it("renders an icon", async () => {
    const { container } = render(<Icon src="home" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <svg
          aria-hidden="true"
          height="100%"
          src="home"
          viewBox="0 0 24 24"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        />
      </div>
    `);
  });
});
