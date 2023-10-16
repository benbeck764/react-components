import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppButton, { AppButtonProps } from "./AppButton";
import CustomThemeProvider from "../_theme/CustomThemeProvider";
import { createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { defaultThemeOptions } from "../_theme/base.theme";
import { getMUITheme } from "../_theme/mui.theme";

type AppButtonStoryProps = Pick<
  AppButtonProps,
  "variant" | "fullWidth" | "disabled"
>;
type Story = StoryObj<typeof AppButton>;

export const Buttons: Story = (args: AppButtonStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Stack direction="row" gap={1}>
        <Stack direction="column" gap={1} maxWidth={100}>
          <AppButton {...args} size="small">
            Small
          </AppButton>
          <AppButton {...args} size="medium">
            Medium
          </AppButton>
          <AppButton {...args} size="large">
            Large
          </AppButton>
        </Stack>
        <Stack direction="column" gap={1} maxWidth={100}>
          <AppButton {...args} size="small" color="secondary">
            Small
          </AppButton>
          <AppButton {...args} size="medium" color="secondary">
            Medium
          </AppButton>
          <AppButton {...args} size="large" color="secondary">
            Large
          </AppButton>
        </Stack>
      </Stack>
    </CustomThemeProvider>
  );
};
Buttons.args = {
  variant: "contained",
  disabled: false,
};

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  title: "AppButton",
  argTypes: {
    focusRipple: { table: { disable: true } },
    classes: { table: { disable: true } },
    tabIndex: { table: { disable: true } },
    color: { table: { disable: true } },
    children: { table: { disable: true } },
    action: { table: { disable: true } },
    centerRipple: { table: { disable: true } },
    disableRipple: { table: { disable: true } },
    disableTouchRipple: { table: { disable: true } },
    focusVisibleClassName: { table: { disable: true } },
    LinkComponent: { table: { disable: true } },
    onFocusVisible: { table: { disable: true } },
    sx: { table: { disable: true } },
    TouchRippleProps: { table: { disable: true } },
    touchRippleRef: { table: { disable: true } },
    disableElevation: { table: { disable: true } },
    disableFocusRipple: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    size: { table: { disable: true } },
    startIcon: { table: { disable: true } },
    href: { table: { disable: true } },
    fullWidth: { table: { disable: true } },
  },
};
export default meta;
