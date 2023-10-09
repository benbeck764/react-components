import { AppMenu, AppMenuItem } from "@benbeck764/react-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { Theme } from "@mui/material/styles";

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

const Menus: FC = () => {
  return (
    <Box>
      <Typography variant="h5">Menus</Typography>
      <Stack direction="row" component="section">
        <AppMenu
          mode="menu"
          buttonProps={{ children: "Button Menu" }}
          menuWidth={150}
        >
          {MenuOptions}
        </AppMenu>
      </Stack>
    </Box>
  );
};

export default Menus;
