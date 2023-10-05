import { styled, FormGroup, Typography } from "@mui/material";

export const StyledViewMore = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.primary.main,
  ...theme.typography.paragraphSmallBold,
}));

export const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  "& > label:not(:last-child)": {
    marginBottom: theme.spacing(0.5),
  },
}));