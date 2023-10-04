import { styled, Box } from "@mui/material";

export const StyledMenuItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$selected",
})<{
  $selected?: boolean;
}>(({ theme, $selected }) => ({
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
  ...($selected && {
    backgroundColor: theme.palette.coolGrey[100],
  }),
}));

export const StyledDisabledMenuItem = styled(Box)(({ theme }) => ({
  padding: "8px 16px",
  color: `${theme.palette.grey[400]} !important`,
  cursor: "default",
}));

export const StyledHeaderMenuItem = styled(Box)(() => ({
  padding: "8px 16px",
  cursor: "default",
}));
