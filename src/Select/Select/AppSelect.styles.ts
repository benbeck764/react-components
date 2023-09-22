import { styled, Box } from "@mui/material";

export const StyledMenuItem = styled(Box)(({ theme }) => ({
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: theme.typography.paragraph.fontSize,
  color: theme.palette.grey[900],
  "&:hover": {
    backgroundColor: theme.palette.coolGrey[100],
  },
  "&:focus": {
    backgroundColor: theme.palette.coolGrey[100],
    outline: "none",
  },
}));
