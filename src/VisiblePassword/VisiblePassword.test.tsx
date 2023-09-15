import React from "react";
import { render } from "@testing-library/react";

import VisiblePassword from ".";

describe("VisiblePassword", () => {
  test("renders the Button component", () => {
    render(<VisiblePassword name="password" showLink={true} isShow={true} />);
  });
});
