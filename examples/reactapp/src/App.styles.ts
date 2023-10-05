import { styled, Theme, Box, Grid } from "@mui/material";

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
    width: "calc(100% - 8px)",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: theme.pageWidths["xl"],
    width: theme.contentWidths?.["xl"],
  },
  marginTop: theme.pageContentMargin,
  marginBottom: theme.pageContentMargin,
}));

export const StyledStickyHeaderContainer = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    top: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar,
  })
);
