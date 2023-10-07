import { Meta, StoryObj } from "@storybook/react";
import CustomThemeProvider from "../_theme/CustomThemeProvider";
import { getMUITheme, defaultThemeOptions } from "../_theme";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

type Story = StoryObj<typeof Typography>;

export const Typographies: Story = () => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
    </CustomThemeProvider>
  );
};
Typographies.args = {};

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Typography",
};
export default meta;
