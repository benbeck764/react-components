import {
  Box,
  TextField,
  TypographyPropsVariantOverrides,
  styled,
} from "@mui/material/";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";

export const StyledContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "inherit",
  width: "100%",
}));

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "$textVariant" && prop !== "$size",
})<{
  $textVariant: OverridableStringUnion<
    Variant,
    TypographyPropsVariantOverrides
  >;
  $size?: string;
}>(({ theme, $textVariant, $size }) => ({
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    // backgroundColor: (theme) => theme.palette.common.white,
    height: $size === "medium" ? 40 : 32,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: 1,
    // borderColor: (theme) => theme.palette.grey[300],
  },
  // Need to make the input have same styles as Typography
  "& .MuiInputBase-root.MuiInput-root": {
    ...theme.typography[$textVariant],
  },
}));
