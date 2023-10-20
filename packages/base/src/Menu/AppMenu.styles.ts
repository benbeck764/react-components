import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledContainerMenu = styled("ul")(({ theme }) => ({
  margin: "6px 0px",
  padding: 0,
  listStyleType: "none",
  "&:focus": { outline: "none" },
  textAlign: "left",
  ...theme.typography.paragraph,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
}));

export const StyledContainerPanel = styled(Box)({
  padding: "16px 16px",
  "&:focus": { outline: "none" },
});
