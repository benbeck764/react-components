import { styled } from "@mui/material/styles";
import PopperUnstyled from "@mui/base/PopperUnstyled/PopperUnstyled";
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

export const StyledPopper = styled(PopperUnstyled)(({ theme }) => ({
  zIndex: theme.zIndex.tooltip,
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.coolGrey[200]}`,
  borderRadius: "8px",
  boxSizing: "border-box",
}));

export const StyledPopperArrow = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: "10px",
  transform: "unset !important",
  "&::before": {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
    display: "block",
    content: '""',
    position: "relative",
    width: "24px",
    height: "24px",
    top: "-23px",
    borderRadius: "2px",
    borderLeft: `1px solid ${theme.palette.grey[200]}`,
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    transform: "rotate(45deg) skew(15deg, 15deg)",
  },
}));
