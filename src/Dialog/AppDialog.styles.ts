import { styled, Box, Button, Dialog, Theme } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }: { theme: Theme }) => ({
  "& .MuiPaper-root.MuiDialog-paper": {
    borderRadius: 8,

    [theme.breakpoints.up("xs")]: {
      maxWidth: theme.custom?.contentWidths?.["xs"] ?? "",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: theme.custom?.contentWidths?.["sm"] ?? "",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: theme.custom?.contentWidths?.["md"] ?? "",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.custom?.contentWidths?.["lg"] ?? "",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: theme.custom?.contentWidths?.["xl"] ?? "",
    },
  },
}));

export const StyledDialogContainer = styled(Box)({
  overflow: "hidden",
});

export const StyledDialogFooter = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > button:not(:last-of-type)": {
      marginRight: theme.spacing(1),
    },
  })
);

export const StyledDialogButton = styled(Button)(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.up("xs")]: {
      height: "40px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "32px",
    },
  })
);
