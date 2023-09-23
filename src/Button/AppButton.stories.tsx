import { Meta, StoryObj } from "@storybook/react";
import AppButton, { AppButtonProps } from "./AppButton";

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  title: "AppButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AppButton>;

export const Primary: Story = (args: AppButtonProps) => (
  <AppButton {...args}>Primary</AppButton>
);
Primary.args = {
  color: "primary",
  variant: "contained",
};

export const Secondary: Story = (args: AppButtonProps) => (
  <AppButton {...args}>Secondary</AppButton>
);
Secondary.args = {
  color: "secondary",
  variant: "contained",
};

export const Disabled: Story = (args: AppButtonProps) => (
  <AppButton {...args}>Disabled</AppButton>
);
Disabled.args = {
  color: "primary",
  variant: "contained",
  disabled: true,
};

export const Small: Story = (args: AppButtonProps) => (
  <AppButton {...args}>Small</AppButton>
);
Small.args = {
  color: "primary",
  variant: "contained",
  size: "small",
};

export const Medium: Story = (args: AppButtonProps) => (
  <AppButton {...args}>Medium</AppButton>
);
Medium.args = {
  color: "primary",
  variant: "contained",
  size: "medium",
};

export const Large: Story = (args: AppButtonProps) => (
  <AppButton {...args}>Large</AppButton>
);
Large.args = {
  color: "primary",
  variant: "contained",
  size: "large",
};
