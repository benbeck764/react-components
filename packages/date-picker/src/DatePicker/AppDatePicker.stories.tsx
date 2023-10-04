import { Meta, StoryObj } from "@storybook/react";
import AppDatePicker, { AppDatePickerProps } from "./AppDatePicker";
import { Stack, createTheme } from "@mui/material";
import { getMUITheme, defaultThemeOptions } from "@theme";
import CustomThemeProvider from "../_theme/CustomThemeProvider";

type AppDatePickerStoryProps = AppDatePickerProps;
type Story = StoryObj<typeof AppDatePicker>;

export const DatePickers: Story = (args: AppDatePickerStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Stack direction="column" gap={1} maxWidth={200}>
        <AppDatePicker {...args} inputSize="small" />
        <AppDatePicker {...args} inputSize="medium" />
        <AppDatePicker {...args} inputSize="large" />
      </Stack>
    </CustomThemeProvider>
  );
};
DatePickers.args = {
  inputLabel: "Created Date*",
};

const meta: Meta<typeof AppDatePicker> = {
  component: AppDatePicker,
  title: "AppDatePicker",
  argTypes: {
    fullWidth: { table: { disable: true } },
  },
};
export default meta;
