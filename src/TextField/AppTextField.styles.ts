import { styled, Icon, Input, InputAdornment } from "@mui/material/";

export const StyledInput = styled(Input)(({ theme }) => ({
  "&.MuiInput-root": {
    border: `1px solid ${theme.palette.coolGrey[300]}`,
    borderRadius: "4px",
    backgroundColor: theme.palette.common.white,
    "&.Mui-focused": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    "&.Mui-error": {
      border: `2px solid ${theme.palette.error.main}`,
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.coolGrey[100],
      border: `1px solid ${theme.palette.coolGrey[100]}`,
    },
    "& > .MuiInput-input": {
      paddingTop: 0,
      paddingBottom: 0,
      WebKitTextFillColor: "currentcolor", // iOS/Safari issue fix
      opacity: 1,
    },
  },
}));

export const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
  textAlign: "left",
  marginLeft: `-${theme.spacing(1)}`,
}));

export const StyledIcon = styled(Icon)(({ theme }) => ({
  fontSize: theme.typography.iconSmall.fontSize,
  lineHeight: theme.typography.iconSmall.fontSize,
}));

export const StyledChipsInput = styled(StyledInput)(({ theme }) => ({
  "&.MuiInputBase-root": {
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    rowGap: theme.spacing(1),
    alignItems: "flex-start",

    "> input": {
      width: "auto",
      flexGrow: 1,
      textOverflow: "ellipsis",
      alignSelf: "center",
      padding: `${theme.spacing(1)} ${theme.spacing(0.5)}`,
    },
  },
}));

export const StyledChipsInputEndAdornment = styled(InputAdornment)(
  ({ theme }) => ({
    top: "50%",
    transform: "translateY(-50%)",
    right: theme.spacing(1.25),
    position: "absolute",
  })
);
