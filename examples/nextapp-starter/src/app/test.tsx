"use client";
import { FC } from "react";
import AppMenu, { AppMenuItem } from "@benbeck764/react-components/Menu";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AppCard from "@benbeck764/react-components/Card";

const Test: FC = () => {
  return (
    <Box>
      <AppCard>
        <AppMenu
          mode="menu"
          buttonProps={{ children: "Button Menu" }}
          menuWidth={150}
        >
          <AppMenuItem>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccountCircleIcon fontSize="small" />
              <Typography variant="paragraphBold">Profile</Typography>
            </Stack>
          </AppMenuItem>
          <AppMenuItem>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CardMembershipIcon fontSize="small" />
              <Typography variant="paragraphBold">Subscription</Typography>
            </Stack>
          </AppMenuItem>
        </AppMenu>
      </AppCard>
    </Box>
  );
};

export default Test;
