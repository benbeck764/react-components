import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { styled, Theme } from "@mui/material/styles";

export const StyledViewMore = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    cursor: "pointer",
    color: theme.palette.primary.main,
    ...theme.typography.paragraphSmallBold,
  })
);

export const StyledFormGroup = styled(FormGroup)(
  ({ theme }: { theme: Theme }) => ({
    "& > label:not(:last-child)": {
      marginBottom: theme.spacing(0.5),
    },
  })
);
