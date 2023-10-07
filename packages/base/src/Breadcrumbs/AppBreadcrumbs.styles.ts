import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    "& .MuiBreadcrumbs-separator": {
      marginLeft: theme.spacing(0.25),
      marginRight: theme.spacing(0.25),
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .MuiBreadcrumbs-separator": {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiBreadcrumbs-separator": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  "& .MuiBreadcrumbs-ol": {
    flexWrap: "nowrap",
  },
  "& .MuiBreadcrumbs-li": {
    whiteSpace: "nowrap",
  },
  "& .MuiBreadcrumbs-li:last-of-type": {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  cursor: "pointer",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.primary.main,
  },
}));
