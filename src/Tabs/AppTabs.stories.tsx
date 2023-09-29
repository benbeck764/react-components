import { Meta, StoryObj } from "@storybook/react";
import AppTabs from "./AppTabs";
import { Box, Stack, Typography, createTheme } from "@mui/material";
import { getMUITheme, defaultThemeOptions } from "@theme";
import CustomThemeProvider from "../_theme/CustomThemeProvider";
import { AppTabsProps, TabItem } from "./AppTabs.props";

type AppTabsStoryProps = AppTabsProps;
type Story = StoryObj<typeof AppTabs>;

const tabItems: TabItem[] = [
  {
    label: "Tab #1",
    children: (
      <Box>
        <Typography>This is the contents of Tab #1.</Typography>
      </Box>
    ),
  },
  {
    label: "Tab #2",
    children: (
      <Box>
        <Typography>This is the contents of Tab #2.</Typography>
      </Box>
    ),
  },
  {
    label: "Tab #3",
    children: (
      <Box>
        <Typography>This is the contents of Tab #3.</Typography>
      </Box>
    ),
  },
];

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
  tabs: tabItems,
  smallDivider: true,
};

const meta: Meta<typeof AppTabs> = {
  component: AppTabs,
  title: "AppTabs",
  args: {},
  argTypes: {},
};
export default meta;
