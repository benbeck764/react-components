import { Meta, StoryObj } from "@storybook/react";
import AppTabs from "./AppTabs";
import { Box, Stack, Theme, Typography, createTheme } from "@mui/material";
import { getMUITheme, defaultThemeOptions } from "@theme";
import CustomThemeProvider from "../_theme/CustomThemeProvider";
import { AppTabsProps, TabItem } from "./AppTabs.props";

type AppTabsStoryProps = AppTabsProps;
type Story = StoryObj<typeof AppTabs>;

const generateTabItems = (numTabs: number): TabItem[] => {
  return Array.from(Array(numTabs).keys()).map((num: number) => {
    return {
      label: `Tab #${num}`,
      children: (
        <Box>
          <Typography>{`This is the contents of Tab #${num}.`}</Typography>
        </Box>
      ),
    };
  });
};

const generateOverflowTabItems = (numTabs: number): TabItem[] => {
  return Array.from(Array(numTabs).keys()).map((num: number) => {
    return {
      label: `Tab #${num}`,
      children: (
        <Box sx={{ overflowY: "auto", maxHeight: "300px" }}>
          {Array.from(Array(24).keys()).map((index: number) => (
            <Typography key={index}>Here is some content...</Typography>
          ))}
        </Box>
      ),
    };
  });
};

export const Tabs: Story = (args: AppTabsStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Stack direction="column" gap={10}>
        <Stack direction="column" gap={4}>
          <Typography variant="h5">Vertical Tabs</Typography>
          <AppTabs {...args} orientation="vertical" />
          <AppTabs {...args} orientation="vertical" reverseIndicator={true} />
        </Stack>
        <Stack direction="column" gap={4}>
          <Typography variant="h5">Horizontal Tabs</Typography>
          <AppTabs {...args} orientation="horizontal" />
          <AppTabs {...args} orientation="horizontal" reverseIndicator={true} />
        </Stack>
      </Stack>
    </CustomThemeProvider>
  );
};
Tabs.args = {
  tabs: generateTabItems(3),
  smallDivider: true,
  hoverColor: (theme: Theme) => theme.palette.coolGrey[200],
};

export const OverflowTabs: Story = (args: AppTabsStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Typography variant="h5" mb={4}>
        Vertical Overflow Tabs
      </Typography>
      <Stack direction="row" gap={4}>
        <AppTabs {...args} orientation="vertical" />
        <AppTabs {...args} orientation="vertical" reverseIndicator={true} />
      </Stack>
    </CustomThemeProvider>
  );
};
OverflowTabs.args = {
  tabs: generateOverflowTabItems(5),
  hoverColor: (theme: Theme) => theme.palette.coolGrey[200],
  smallDivider: true,
};

const meta: Meta<typeof AppTabs> = {
  component: AppTabs,
  title: "AppTabs",
};
export default meta;
