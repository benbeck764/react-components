import { styled, Box } from "@mui/material";

const StyledLabelBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  paddingBottom: theme.spacing(0.5),
  paddingTop: theme.spacing(0.5),
}));

export default StyledLabelBox;
