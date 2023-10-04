import { styled, Stack } from "@mui/material";

export const StyledMultiSelectMenuItem = styled(Stack)(({ theme }) => ({
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
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
