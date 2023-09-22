import { styled, Checkbox, FormControlLabel } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";

interface CheckboxSizeProps {
  checkboxSize: number;
}

export const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {},
  margin: 0,
});

export const StyledCheckbox = styled(Checkbox, {
  shouldForwardProp: (prop) => prop !== "checkboxSize",
})<CheckboxSizeProps>(({ theme, checkboxSize }) => ({
  marginBottom: "auto",
  padding: 0,
  marginRight: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  "&.MuiCheckbox-colorPrimary.Mui-checked .MuiIcon-root": {
    borderColor: theme.palette.primary.main,
  },
  "& input:disabled + .MuiIcon-root": {
    borderColor: theme.palette.coolGrey[300],
    backgroundColor: theme.palette.coolGrey[100],
  },

  "& input:focus + .MuiIcon-root": {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    height: checkboxSize - 2 * 1.5,
    width: checkboxSize - 2 * 1.5,
    "&::before": {
      top: 0.5,
    },
  },
}));

export const StyledCheckIcon = styled(CheckIcon, {
  shouldForwardProp: (prop) => prop !== "checkboxSize",
})<CheckboxSizeProps>(({ theme, checkboxSize }) => ({
  borderRadius: `${theme.shape.borderRadius}px`,
  borderWidth: "1.5px",
  borderColor: theme.palette.coolGrey[300],
  borderStyle: "solid",
  height: checkboxSize - 2 * 1.5,
  width: checkboxSize - 2 * 1.5,
  padding: 0,
  position: "relative",
  "&::before": {
    width: "100%",
    textAlign: "center",
    position: "relative",
    top: 1,
  },
}));

export const StyledMinusIcon = styled(RemoveIcon, {
  shouldForwardProp: (prop) => prop !== "checkboxSize",
})<CheckboxSizeProps>(({ theme, checkboxSize }) => ({
  borderRadius: `${theme.shape.borderRadius}px`,
  borderWidth: "1.5px",
  borderColor: theme.palette.coolGrey[300],
  borderStyle: "solid",
  height: checkboxSize - 2 * 1.5,
  width: checkboxSize - 2 * 1.5,
  padding: 0,
  position: "relative",
  "&::before": {
    width: "100%",
    textAlign: "center",
    position: "relative",
    top: 1,
  },
}));

export const StyledLabel = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    ...theme.typography.paragraphLarge,
    lineHeight: "18px",
  },
  [theme.breakpoints.up("xl")]: {
    ...theme.typography.paragraphSmall,
    lineHeight: "18px",
  },
}));
