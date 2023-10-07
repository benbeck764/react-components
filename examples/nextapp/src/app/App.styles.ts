"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Theme, styled } from "@mui/material/styles";

export const StyledPageContainer = styled(Grid)(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: "100vw",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "100%",
    },
  })
);

export const StyledPageContent = styled(Box)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "calc(100% - 24px)",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: theme.pageWidths?.["xl"],
    width: theme.contentWidths?.["xl"],
  },
  marginTop: theme.pageContentMargin,
  marginBottom: theme.pageContentMargin,
}));
