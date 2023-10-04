import { styled, Button, Box, Drawer, Typography } from "@mui/material/";

export const StyledList = styled("ul")({
  padding: "6px 0px",
  listStyleType: "none",
  "&:focus": { outline: "none" },
});

export const StyledPanelBox = styled(Box)({
  padding: "16px 16px",
  "&:focus": { outline: "none" },
});

interface AppDrawerDisplayMode {
  displayAboveHeader?: boolean;
}

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "displayAboveHeader",
})<AppDrawerDisplayMode>(({ theme, displayAboveHeader }) => ({
  ...(displayAboveHeader
    ? {}
    : {
        zIndex: 100,
        "& .MuiDrawer-paper": {
          [theme.breakpoints.up("xs")]: {
            top: theme.headerHeights?.["xs"] ?? 0,
          },
          [theme.breakpoints.up("xl")]: {
            top: theme.headerHeights?.["xl"] ?? 0,
          },
        },
      }),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-sizeMedium": {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
