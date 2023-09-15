import React from "react";
import { render } from "@testing-library/react";

import Dropdown from ".";

describe("Dropdown", () => {
  test("renders the Dropdown component", () => {
    render(
      <Dropdown icon="clipboard" value="1" defaultValue="1">
        <Dropdown.Item value="1">Hello</Dropdown.Item>
        <Dropdown.Item value="2">Another action</Dropdown.Item>
        <Dropdown.Item value="3">Something else here</Dropdown.Item>
      </Dropdown>
    );
  });
});
