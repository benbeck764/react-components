import { Meta, StoryObj } from "@storybook/react";
import AppMenu, { AppMenuProps } from "./AppMenu";
import { Avatar, Stack, Theme, Typography, createTheme } from "@mui/material";
import { getMUITheme, defaultThemeOptions } from "@theme";
import CustomThemeProvider from "../_theme/CustomThemeProvider";
import AppMenuItem from "./components/AppMenuItem/AppMenuItem";
import { AccountCircle, CardMembership } from "@mui/icons-material";

type AppMenuStoryProps = AppMenuProps;
type Story = StoryObj<typeof AppMenu>;

const MenuOptions = (
  <>
    <AppMenuItem>
      <Stack direction="row" alignItems="center" spacing={1}>
        <AccountCircle
          fontSize="small"
          sx={{ color: (theme: Theme) => theme.palette.grey[600] }}
        />
        <Typography variant="paragraphBold">Profile</Typography>
      </Stack>
    </AppMenuItem>
    <AppMenuItem>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CardMembership
          fontSize="small"
          sx={{ color: (theme: Theme) => theme.palette.grey[600] }}
        />
        <Typography variant="paragraphBold">Subscription</Typography>
      </Stack>
    </AppMenuItem>
  </>
);

export const ButtonMenu: Story = (args: AppMenuStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Stack direction="row" gap={1}>
        <AppMenu {...args}>{MenuOptions}</AppMenu>
      </Stack>
    </CustomThemeProvider>
  );
};
ButtonMenu.args = {
  mode: "menu",
  buttonProps: { children: "Button Menu" },
  menuWidth: 150,
};

export const ImageMenu: Story = (args: AppMenuStoryProps) => {
  const theme = createTheme(getMUITheme(defaultThemeOptions));
  return (
    <CustomThemeProvider theme={theme}>
      <Stack direction="row" gap={1}>
        <AppMenu {...args}>{MenuOptions}</AppMenu>
      </Stack>
    </CustomThemeProvider>
  );
};
ImageMenu.args = {
  mode: "menu",
  buttonProps: {
    children: (
      <Avatar
        sx={{
          width: 50,
          height: 50,
        }}
        src="https://lh3.googleusercontent.com/a/ACg8ocIwcJKx-i5LIe26T7ONriSopUk7x-XjMf-4ns7TyVw0CIc=s576-c-no"
        imgProps={{
          referrerPolicy: "no-referrer",
          alt: "Image Menu",
        }}
      ></Avatar>
    ),
  },
  menuWidth: 150,
  toolTipTitle: "Account",
};

const meta: Meta<typeof AppMenu> = {
  component: AppMenu,
  title: "AppMenu",
  args: {},
  argTypes: {},
};
export default meta;
