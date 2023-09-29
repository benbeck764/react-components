import { styled, Tabs, Divider, Theme } from "@mui/material/";

export const StyledTabs = styled(Tabs, {
  shouldForwardProp: (prop) =>
    prop !== "onFocusVisible" &&
    prop !== "reverse" &&
    prop !== "dividerColor" &&
    prop !== "selectedColor" &&
    prop !== "hoverColor",
})<{
  orientation: "horizontal" | "vertical";
  reverse: boolean;
  dividerColor?: (theme: Theme) => string;
  selectedColor?: (theme: Theme) => string;
  hoverColor?: (theme: Theme) => string;
}>(
  () =>
    ({
      theme,
      orientation,
      reverse,
      dividerColor,
      selectedColor,
      hoverColor,
    }) => {
      const dividerColorValue = dividerColor
        ? dividerColor(theme)
        : theme.palette.grey[300];
      const selectedColorValue = selectedColor
        ? selectedColor(theme)
        : theme.palette.primary.main;
      const hoverColorValue = hoverColor ? hoverColor(theme) : "transparent";

      return {
        "& .MuiButtonBase-root": {
          color: `${theme.palette.text.primary} !important`,
          fontWeight: "400 !important",
          paddingTop: "12px !important",
          paddingBottom: "12px !important",
          paddingLeft:
            orientation === "vertical" ? "16px !important" : "20px !important",
          paddingRight:
            orientation === "vertical" ? "16px !important" : "20px !important",
          margin: "0 !important",
          ...(orientation === "horizontal" &&
            reverse === false && {
              borderBottom: `2px solid ${dividerColorValue} !important`,
            }),
          ...(orientation === "vertical" &&
            reverse === false && {
              borderRight: `2px solid ${dividerColorValue} !important`,
            }),
          ...(orientation === "horizontal" &&
            reverse === true && {
              borderTop: `2px solid ${dividerColorValue} !important`,
            }),
          ...(orientation === "vertical" &&
            reverse && {
              borderLeft: `2px solid ${dividerColorValue} !important`,
            }),

          "&:hover": {
            color: `${selectedColorValue} !important`,
            backgroundColor: `${hoverColorValue} !important`,

            "> p": {
              fontWeight: "700 !important",
            },
          },
        },
        "& .Mui-selected": {
          color: `${selectedColorValue} !important`,
          fontWeight: "700 !important",
        },
      };
    }
);

export const StyledDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== "reverse" && prop !== "dividerColor",
})<{
  orientation: "horizontal" | "vertical";
  reverse: boolean;
  dividerColor?: (theme: Theme) => string;
}>(() => ({ theme, orientation, reverse, dividerColor }) => {
  const dividerColorValue = dividerColor
    ? dividerColor(theme)
    : theme.palette.grey[300];
  return {
    borderColor: dividerColorValue,
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
  };
});
