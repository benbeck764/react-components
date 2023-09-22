import { styled, Box, SxProps, Theme } from "@mui/material";

export const StyledQuillWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "containerSx" &&
    prop !== "editorSx" &&
    prop !== "focused" &&
    prop !== "error",
})<{
  containerSx?: SxProps<Theme>;
  editorSx?: SxProps<Theme>;
  focused: boolean;
  error?: boolean;
}>(({ theme, containerSx, editorSx, focused, error }) => ({
  ".quill": {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    ...containerSx,
  },
  ".ql-toolbar.ql-snow": {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    border: `1px solid ${theme.palette.coolGrey[300]}`,
    borderTopLeftRadius: `${theme.shape.borderRadius}px`,
    borderTopRightRadius: `${theme.shape.borderRadius}px`,
    ".ql-formats:not(:last-child)": {
      position: "relative",
      marginRight: theme.spacing(2),
      "&::after": {
        content: '""',
        position: "absolute",
        borderLeft: `1px solid ${theme.palette.coolGrey[300]}`,
        right: `-${theme.spacing(1)}`,
        height: "100%",
      },
    },
    "button.ql-active": {
      ".ql-stroke": {
        stroke: theme.palette.primary.main,
      },
      ".ql-fill": {
        fill: theme.palette.primary.main,
      },
    },
    button: {
      "&:hover .ql-stroke": {
        stroke: theme.palette.primary.main,
      },
      "&:hover .ql-fill": {
        fill: theme.palette.primary.main,
      },
    },
    ...(focused && {
      border: `2px solid ${theme.palette.primary.main}`,
    }),
    ...(error && {
      border: `2px solid ${theme.palette.error.main}`,
    }),
  },
  ".ql-container.ql-snow": {
    border: `1px solid ${theme.palette.coolGrey[300]}`,
    borderBottomLeftRadius: `${theme.shape.borderRadius}px`,
    borderBottomRightRadius: `${theme.shape.borderRadius}px`,
    height: "calc(100% - 42px)",
    ...(focused && {
      border: `2px solid ${theme.palette.primary.main}`,
    }),
    ...(error && {
      border: `2px solid ${theme.palette.error.main}`,
    }),
  },
  ".ql-editor": {
    fontFamily: theme.typography.fontFamily,
    ...theme.typography.paragraph,
    ...editorSx,
  },
}));
