import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography";

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
