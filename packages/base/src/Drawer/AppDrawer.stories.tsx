import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppDrawer, { AppDrawerProps } from "./AppDrawer";
import CustomThemeProvider from "../theme/CustomThemeProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Theme, createTheme } from "@mui/material/styles";
import { defaultThemeOptions } from "../theme/base.theme";
import { getMUITheme } from "../theme/mui.theme";
import { AppMenuItem } from "../Menu/AppMenuItem";

type AppDrawerStoryProps = AppDrawerProps;
type Story = StoryObj<typeof AppDrawer>;

const MenuOptions = (
  <>
    <AppMenuItem>
      <Stack direction="row" alignItems="center" spacing={1}>
        <AccountCircleIcon
          fontSize="small"
          sx={{ color: (theme: Theme) => theme.palette.grey[600] }}
        />
        <Typography variant="paragraphBold">Profile</Typography>
      </Stack>
    </AppMenuItem>
    <AppMenuItem>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CardMembershipIcon
          fontSize="small"
          sx={{ color: (theme: Theme) => theme.palette.grey[600] }}
        />
        <Typography variant="paragraphBold">Subscription</Typography>
      </Stack>
    </AppMenuItem>
  </>
);

export const Drawer: Story = (args: AppDrawerStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Stack direction="row" gap={1}>
        <AppDrawer {...args}>{MenuOptions}</AppDrawer>
      </Stack>
    </CustomThemeProvider>
  );
};
Drawer.args = {
  mode: "menu",
  buttonProps: { children: "Drawer Menu" },
  drawerProps: {
    anchor: "bottom",
    sx: {
      "& .MuiDrawer-paper": { top: "unset", boxSizing: "border-box" },
      "& ul": { mb: 0 },
    },
    variant: "persistent",
  },
};

const meta: Meta<typeof AppDrawer> = {
  component: AppDrawer,
  title: "AppDrawer",
  args: {},
  argTypes: {},
};
export default meta;
