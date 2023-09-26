import { Theme, ThemeOptions, ButtonPropsSizeOverrides } from "@mui/material";

export const getMUITheme = (themeBaseOptions: ThemeOptions): ThemeOptions => {
  const themeBase = themeBaseOptions as Theme;
  const spacing = themeBaseOptions.spacing as number;
  type ButtonSizes = { small: number; medium: number; large: number } & {
    [key in keyof ButtonPropsSizeOverrides]: number;
  };
  const buttonPadding: { X: number; Y: ButtonSizes } = {
    X: 14,
    Y: {
      small: 5.25,
      medium: 8,
      large: 13.25,
    },
  };

  return {
    ...themeBaseOptions,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "*::-webkit-scrollbar": {
              width: "14px",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: themeBase.palette.grey[300],
              borderRadius: "10px",
              border: "4px solid rgba(0,0,0,0)",
              backgroundClip: "padding-box",
            },
            "*::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
          },
          // Hide Chrome auto-fill color
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 100px ${themeBase.palette.common.white} inset`,
              WebKitTextFillColor: `${themeBase.palette.common.white}`,
            },
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            body1: "p",
            body2: "p",
            subtitle1: "p",
            subtitle2: "p",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 2 * themeBase.shape.borderRadius,
            overflow: "unset",
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            ":last-child": {
              paddingBottom: spacing * 2,
            },
          },
        },
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          root: {
            color: themeBase.palette.common.black,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: themeBase.palette.coolGrey[300],
            ".MuiSvgIcon-root > path": {
              border: `1px solid ${themeBase.palette.coolGrey[300]}`,
              borderRadius: "4px",
            },
            "&.MuiCheckbox-colorPrimary.Mui-checked.Mui-disabled .MuiIcon-root":
              {
                color: themeBase.palette.common.white,
                borderColor: themeBase.palette.coolGrey[300],
                backgroundColor: themeBase.palette.coolGrey[300],
              },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.MuiInputBase-sizeSmall	": {
              height: "32px",
            },
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            color: themeBase.palette.grey[400],
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: "small",
          color: "primary",
        },
        styleOverrides: {
          root: {
            "&.MuiButton-root": {
              boxShadow: "none",
            },
          },
          outlined: {
            ...themeBase.typography.paragraphBold,
            borderWidth: 1.5,
            borderStyle: "solid",
            paddingLeft: buttonPadding.X,
            paddingRight: buttonPadding.X,
            "&.MuiButton-sizeSmall": {
              paddingTop: buttonPadding.Y.small - 2.75,
              paddingBottom: buttonPadding.Y.small - 2.75,
            },
            "&.MuiButton-sizeMedium": {
              paddingTop: buttonPadding.Y.medium - 1.5,
              paddingBottom: buttonPadding.Y.medium - 1.5,
            },
            "&.MuiButton-sizeLarge": {
              paddingTop: buttonPadding.Y.large,
              paddingBottom: buttonPadding.Y.large,
            },
            "&.MuiButton-outlinedPrimary": {
              borderColor: themeBase.palette.primary.main,
              "&:hover": {
                borderColor: themeBase.palette.primary.dark,
                borderWidth: 1.5,
              },
              "&:focus": {
                borderColor: themeBase.palette.action.focus,
                boxShadow: `inset 0px 0px 0px 0.5px ${themeBase.palette.action.focus}`,
              },
            },
          },
          contained: {
            ...themeBase.typography.paragraphBold,
            borderWidth: 2,
            borderStyle: "solid",
            paddingLeft: buttonPadding.X,
            paddingRight: buttonPadding.X,
            "&.MuiButton-sizeSmall": {
              paddingTop: buttonPadding.Y.small,
              paddingBottom: buttonPadding.Y.small,
            },
            "&.MuiButton-sizeMedium": {
              paddingTop: buttonPadding.Y.medium,
              paddingBottom: buttonPadding.Y.medium,
            },
            "&.MuiButton-sizeLarge": {
              paddingTop: buttonPadding.Y.large,
              paddingBottom: buttonPadding.Y.large,
            },
            "&.MuiButton-containedPrimary": {
              borderColor: themeBase.palette.primary.main,
              "&:hover": {
                borderColor: themeBase.palette.primary.dark,
              },
              "&:focus": {
                borderColor: themeBase.palette.action.focus,
              },
              "&.Mui-disabled": {
                color: themeBase.palette.coolGrey[100],
                borderColor: themeBase.palette.coolGrey[400],
                backgroundColor: themeBase.palette.coolGrey[400],
              },
            },
            "&.MuiButton-containedSecondary": {
              borderColor: themeBase.palette.secondary.main,
              "&:hover": {
                borderColor: themeBase.palette.secondary.dark,
              },
              "&:focus": {
                borderColor: themeBase.palette.coolGrey[500],
              },
              "&.Mui-disabled": {
                color: themeBase.palette.common.white,
                borderColor: themeBase.palette.coolGrey[300],
                backgroundColor: themeBase.palette.coolGrey[300],
              },
            },
          },
          text: {
            "&.MuiButton-text": {
              "&:focus": {
                color: themeBase.palette?.primary.dark,
                border: "none",
              },
              "&:hover": {
                backgroundColor: "unset",
              },
            },
          },
          startIcon: {
            "&.MuiButton-startIcon": {
              marginLeft: "0",
              marginRight: "8px",
            },
          },
          endIcon: {
            "&.MuiButton-endIcon": {
              marginLeft: "8px",
              marginRight: "0",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            "&.MuiRadio-root.Mui-checked > .MuiBox-root > span": {
              borderColor: themeBase.palette.primary.main,
            },
            "&.MuiRadio-root > .MuiBox-root > span": {
              borderColor: themeBase.palette.coolGrey[300],
            },
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderCollapse: "separate",
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&.MuiTableRow-hover:hover": {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            "&.MuiTableRow-hover.AppTableRow-footerHover": {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            "&.MuiTableRow-hover.AppTableRow-footerHover + .AppTableRow-footer":
              {
                backgroundColor: themeBase.palette.coolGrey[100],
              },
            "&.MuiTableRow-hover:hover + .AppTableRow-footer": {
              backgroundColor: themeBase.palette.coolGrey[100],
            },

            "&.MuiTableRow-root:focus-within": {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            "&.MuiTableRow-root.AppTableRow-footerFocus": {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            "&.MuiTableRow-root:first-of-type > td": {
              borderTop: "none",
            },
            "&.MuiTableRow-root.AppTableRow-custom > td, &.MuiTableRow-root.AppTableRow-footer > td":
              {
                borderTop: "none",
              },
            ".MuiTableRow-root.AppTableRow-custom + &.MuiTableRow-root > td": {
              borderTop: "none",
            },
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: themeBase.palette.grey[200],
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            ...(themeBase.typography.h5 as React.CSSProperties),
            backgroundColor: themeBase.palette.grey[200],
            padding: spacing,
            textTransform: "uppercase",
          },
          body: {
            ...(themeBase.typography.paragraph as React.CSSProperties),
            padding: spacing,
            borderBottom: "none",
            borderTop: "1px solid " + themeBase.palette.coolGrey[200],
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            overflow: "unset",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            "&.MuiButtonBase-root": {
              ...themeBase.typography.paragraph,
              paddingBottom: "4px",
              paddingTop: "4px",
              paddingLeft: "0px",
              paddingRight: "0px",
              minWidth: "unset",
              minHeight: "unset",
              maxWidth: "unset",
              maxHeight: "unset",
              marginRight: "18px",
              textTransform: "none",
              color: themeBase.palette.coolGrey[900],
              "&.Mui-selected": {
                ...themeBase.typography.paragraphBold,
              },
              "&.Mui-disabled": {
                color: themeBase.palette.grey[400],
              },
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: "0px",
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
        styleOverrides: {
          arrow: {
            "&.MuiTooltip-arrow": {
              color: themeBase.palette.coolGrey[600],
            },
          },
          tooltip: {
            "&.MuiTooltip-tooltip": {
              ...themeBase.typography.paragraphSmall,
              background: themeBase.palette.coolGrey[600],
              borderRadius: `${themeBase.shape.borderRadius}px`,
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "8px",
              paddingBottom: "8px",
              maxWidth: "600px",
              margin: "6px !important",
            },
          },
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          rectangular: {
            borderRadius: `${themeBase.shape.borderRadius}px`,
          },
        },
      },
    },
    headerHeights: themeBaseOptions.headerHeights,
    contentWidths: themeBaseOptions.contentWidths,
  };
};
