import { styled, Box, Paper, Card } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  borderTopLeftRadius: theme.shape.borderRadius * 2,
  borderTopRightRadius: theme.shape.borderRadius * 2,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export const StyledCardHeaderContainer = styled(Box)(({ theme }) => ({
  zIndex: 5,
  marginLeft: theme.spacing(-2),
  marginRight: theme.spacing(-2),
  marginTop: theme.spacing(-2),
}));

export const StyledCardHeader = styled(Paper)(({ theme }) => ({
  display: "flex",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(2),
}));

export const StyledControlsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginLeft: "auto",
  alignItems: "start",
  "& > :not(:first-of-type):not(:empty)": {
    marginLeft: theme.spacing(2),
  },
}));
