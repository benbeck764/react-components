import Box from "@mui/material/Box/Box";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import { styled } from "@mui/material/styles";

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
    top:
      (theme.headerHeights?.["xs"] ?? 0) + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("sm")]: {
    top:
      (theme.headerHeights?.["sm"] ?? 0) + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("md")]: {
    top:
      (theme.headerHeights?.["md"] ?? 0) + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("lg")]: {
    top:
      (theme.headerHeights?.["lg"] ?? 0) + +theme.spacing(1).replace("px", ""),
  },
  [theme.breakpoints.up("xl")]: {
    top:
      (theme.headerHeights?.["xl"] ?? 0) + +theme.spacing(1).replace("px", ""),
  },
}));
