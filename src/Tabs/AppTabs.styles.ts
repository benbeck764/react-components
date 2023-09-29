import { styled, Tabs, Divider } from "@mui/material/";

export const StyledTabs = styled(Tabs)<{
  orientation?: "horizontal" | "vertical";
  reverse?: boolean;
}>(() => ({ theme, orientation, reverse }) => ({
  "& .MuiButtonBase-root": {
    textTransform: "capitalize",
    color: theme.palette.common.black,
    fontWeight: 400,
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: orientation === "vertical" ? "16px" : "20px",
    paddingRight: orientation === "vertical" ? "16px" : "20px",
    margin: 0,
    ...(orientation === "horizontal" &&
      !reverse && {
        borderBottom: `2px solid ${theme.palette.grey[300]}`,
      }),
    ...(orientation === "vertical" &&
      !reverse && {
        borderRight: `2px solid ${theme.palette.grey[300]}`,
      }),
    ...(orientation === "horizontal" &&
      reverse && {
        borderTop: `2px solid ${theme.palette.grey[300]}`,
      }),
    ...(orientation === "vertical" &&
      reverse && {
        borderLeft: `2px solid ${theme.palette.grey[300]}`,
      }),

    "&:hover": {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.coolGrey[200],

      "> p": {
        fontWeight: 700,
      },
    },
  },
  "& .Mui-selected": {
    color: theme.palette.common.black,
    fontWeight: 700,
    backgroundColor: theme.palette.coolGrey[200],
  },
}));

export const StyledDivider = styled(Divider)<{
  orientation?: "horizontal" | "vertical";
  reverse?: boolean;
}>(() => ({ theme, orientation, reverse }) => ({
  borderColor: theme.palette.grey[300],
  ...(!reverse && {
    borderBottomWidth: orientation === "horizontal" ? "2px" : 0,
    marginTop: orientation === "horizontal" ? "-2px" : 0,

    borderRightWidth: orientation === "vertical" ? "2px" : 0,
    marginLeft: orientation === "vertical" ? "-2px" : 0,
  }),
  ...(reverse && {
    borderTopWidth: orientation === "horizontal" ? "1px" : 0,
    marginBottom: orientation === "horizontal" ? "-2px" : 0,

    borderLeftWidth: orientation === "vertical" ? "1px" : 0,
    marginRight: orientation === "vertical" ? "-2px" : 0,
  }),
}));
