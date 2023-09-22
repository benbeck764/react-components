import { styled, Card } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  WebkitTapHighlightColor: "transparent",
  '&[data-hover="true"]:hover': {
    backgroundColor: theme.palette.coolGrey[100],
    borderColor: theme.palette.coolGrey[300],
    borderStyle: "solid",
    borderWidth: 1,
    padding: theme.custom.spacing * 2 - 1,
  },
}));
