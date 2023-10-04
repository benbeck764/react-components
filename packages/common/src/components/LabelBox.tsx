import { styled, Box } from "@mui/material";

export const StyledLabelBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  paddingBottom: theme.spacing(0.5),
  paddingTop: theme.spacing(0.5),
}));
