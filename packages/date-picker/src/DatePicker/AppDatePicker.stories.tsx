import { Meta, StoryObj } from "@storybook/react";
import AppDatePicker, { AppDatePickerProps } from "./AppDatePicker";
import { Stack, createTheme } from "@mui/material";
import { CustomThemeProvider } from "@benbeck764/react-components";

type AppDatePickerStoryProps = AppDatePickerProps;
type Story = StoryObj<typeof AppDatePicker>;

export const DatePickers: Story = (args: AppDatePickerStoryProps) => {
  const theme = createTheme({});
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
