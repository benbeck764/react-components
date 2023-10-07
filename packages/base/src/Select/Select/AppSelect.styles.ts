import Box from "@mui/material/Box";
import { styled, Theme } from "@mui/material/styles";

export const StyledMenuItem = styled(Box)(({ theme }: { theme: Theme }) => ({
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
