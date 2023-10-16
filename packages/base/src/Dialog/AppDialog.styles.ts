import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import { styled, Theme } from "@mui/material/styles";

export const StyledDialog = styled(Dialog)(({ theme }: { theme: Theme }) => ({
  "& .MuiPaper-root.MuiDialog-paper": {
    borderRadius: 8,

    [theme.breakpoints.up("xs")]: {
      maxWidth: theme.contentWidths?.["xs"] ?? 327,
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: theme.contentWidths?.["sm"] ?? 366,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: theme.contentWidths?.["md"] ?? 381,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.contentWidths?.["lg"] ?? 744,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: theme.contentWidths?.["xl"] ?? 1232,
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
