import { userEvent, within } from "@storybook/test";
import MyButton from "./MyButton";

export default {
  component: MyButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
  argTypes: {
    state: {
      options: ["primary", "secondary", "tertiary"],
      control: "multi-select",
    },
  },
  args: {
    label: "button",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    backgroundColor: "#1677ff",
    state: "primary",
  },
};

export const Secondary = {
  args: {
    state: "secondary",
  },
};

export const Tertiary = {
  args: {
    state: "tertiary",
  },
};

export const ButtonRender = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole("button", { name: "button" }));
  },
};
