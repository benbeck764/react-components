import { styled, Box, Typography } from "@mui/material/";

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  marginBottom: theme.spacing(1),
  WebkitTapHighlightColor: "transparent",
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  textTransform: "uppercase",
}));

export const StyledSubheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.up("xs")]: {
    ...theme.typography.mobileParagraphSmallBold,
  },
  [theme.breakpoints.up("xl")]: {
    ...theme.typography.paragraphSmallBold,
  },
}));
