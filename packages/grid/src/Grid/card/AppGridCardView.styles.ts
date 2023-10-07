import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  WebkitTapHighlightColor: "transparent",
  '&[data-hover="true"]:hover': {
    backgroundColor: theme.palette.coolGrey[100],
    borderColor: theme.palette.coolGrey[300],
    borderStyle: "solid",
    borderWidth: 1,
    padding: `calc(${theme.spacing(2)} - 1px)`,
  },
}));
