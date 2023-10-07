import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledGridBody = styled(Box)(({ theme }) => ({
  "& * .AppTableRow-row:hover": {
    backgroundColor: theme.palette.coolGrey[100],
  },
  "& * AppTableRow-footerHover + .AppTableRow-footer": {
    backgroundColor: theme.palette.coolGrey[100],
  },
  "& * .AppTableRow-row:hover + .AppTableRow-footer": {
    backgroundColor: theme.palette.coolGrey[100],
  },
  "& * .AppTableRow-row:focus-within": {
    backgroundColor: theme.palette.coolGrey[100],
  },
  "& * .AppTableRow-row.AppTableRow-footerFocus": {
    backgroundColor: theme.palette.coolGrey[100],
  },
  "& > .AppTableRow-row:first-of-type": {
    borderTop: "none",
  },
}));
