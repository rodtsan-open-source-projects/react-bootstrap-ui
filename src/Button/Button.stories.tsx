import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["id", "onClick"],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Primary",
  type: "button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  type: "button",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  type: "button",
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning",
  type: "button",
  variant: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  type: "button",
  variant: "danger",
};
