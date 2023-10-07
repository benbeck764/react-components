import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledGridRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: theme.palette.common.white,
  borderTop: "1px solid " + theme.palette.coolGrey[200],
}));

export const StyledGridCell = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  ...theme.typography.paragraph,
}));
