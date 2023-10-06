import React, { Fragment, useCallback } from "react";
import { StoryFn, Meta } from "@storybook/react";
import NavBar, { NavBarProps } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/NavBar",
  component: NavBar,
} as Meta<typeof NavBar>;

const menus = [
  {
    id: "menu-0",
    name: "Services",
    path: "/services",
    pattern: /^\/services/,
    children: [],
  },
  {
    id: "menu-1",
    name: "Projects",
    path: "/projects",
    pattern: /^\/projects/,
    children: [],
  },
  {
    id: "menu-2",
    name: "About Us",
    path: "/about-us",
    pattern: /^\/about-us$/,
    children: [],
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NavBar> = (args: NavBarProps) => {
  const handleNavBarCollapsed = useCallback((node: HTMLDivElement) => {
    if (node) {
      if (node.previousElementSibling) {
        node.previousElementSibling.classList.add("collapsed");
      }
      node.classList.remove("show");
    }
  }, []);
  return (
    <NavBar {...args}>
      <Fragment>
        <NavBar.Container>
          <NavBar.Brand />
          <NavBar.Toggler />
          <NavBar.Collapse
            collapseRef={handleNavBarCollapsed}
            justifyContent="right"
          >
            <NavBar.Menu>
              {menus.map((m, k) => (
                <NavBar.MenuItem key={k}>
                  <a href={m.path}>
                    <span>{m.name}</span>
                  </a>
                </NavBar.MenuItem>
              ))}
            </NavBar.Menu>
          </NavBar.Collapse>
        </NavBar.Container>
      </Fragment>
    </NavBar>
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   children: "Click me!",
// };
