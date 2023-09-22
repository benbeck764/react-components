import { styled } from "@mui/material/styles";
import { Box, Snackbar } from "@mui/material/";

export const StyledToastBox = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[600],
  borderRadius: "4px",
  padding: theme.spacing(2),
  display: "flex",
}));

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  width: "max-content",
  maxWidth: `calc(100% - ${theme.spacing(3)})`,
  [theme.breakpoints.up("xs")]: {
    top: theme.custom.headerHeights["xs"] + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("sm")]: {
    top: theme.custom.headerHeights["sm"] + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("md")]: {
    top: theme.custom.headerHeights["md"] + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("lg")]: {
    top: theme.custom.headerHeights["lg"] + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("xl")]: {
    top: theme.custom.headerHeights["xl"] + +theme.spacing(1).replace("px", ""),
  },
}));
