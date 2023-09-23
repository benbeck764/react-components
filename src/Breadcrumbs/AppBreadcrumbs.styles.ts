import { styled, Breadcrumbs, Chip, Link, emphasize } from "@mui/material";

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  "& .MuiBreadcrumbs-separator": {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    height: theme.spacing(4),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
    [theme.breakpoints.down("xl")]: {
      marginBottom: theme.spacing(0.5),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  cursor: "pointer",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.primary.main,
  },
}));
