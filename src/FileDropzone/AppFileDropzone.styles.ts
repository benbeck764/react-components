import { styled, Box, Stack } from "@mui/material";
import { CloseButton } from "../_common/components/CloseButton";

export const StyledDropzoneWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.coolGrey[300]}`,
  borderRadius: "4px",
}));

export const StyledDropzone = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: theme.palette.grey[200],
  borderStyle: "dashed",
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[400],
  outline: "none",
  transition: "border .24s ease-in-out",
  alignItems: "center",
  justifyContent: "center",

  "&:focus": {
    borderColor: theme.palette.primary.main,
  },
}));

export const StyledThumb = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 100,
  height: 100,
  padding: theme.spacing(0.5),
  boxSizing: "border-box",
  position: "relative",
}));

export const StyledInnerThumb = styled(Box)(() => ({
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
}));

export const StyledImage = styled("img")(() => ({
  display: "block",
  width: "auto",
  height: "100%",
}));

export const StyledCloseButton = styled(CloseButton)(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.coolGrey[200],
  top: `-${theme.spacing(1.5)}`,
  left: `-${theme.spacing(1.5)}`,
  padding: theme.spacing(0.25),

  "&:hover": {
    backgroundColor: theme.palette.coolGrey[400],
    color: theme.palette.common.black,
  },

  "> svg": {
    fontSize: "18px",
  },
}));
