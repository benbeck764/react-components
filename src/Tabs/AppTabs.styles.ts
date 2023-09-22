import { styled, AppBar, Box } from "@mui/material/";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: "none",
}));

export const StyledDivider = styled(Box)(() => ({ theme }) => ({
  borderTop: `2px solid ${theme.palette.grey[200]}`,
  marginTop: `-${theme.spacing(0.25)}`,
}));

export const StyledHeaderBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));
