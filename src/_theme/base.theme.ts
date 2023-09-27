import {
  Breakpoint,
  BreakpointsOptions,
  ThemeOptions,
  TypographyVariants,
} from "@mui/material";
import { paletteOptions } from "./palette";

const breakpointValues: { [key in Breakpoint]: number } = {
  xs: 0,
  sm: 330,
  md: 400,
  lg: 768,
  xl: 1200,
};

const breakPointsOptions: BreakpointsOptions = { values: breakpointValues };

const lineHeights: { [key in keyof TypographyVariants]: number } = {
  h1: 1.3,
  h2: 1.3,
  h3: 1.25,
  h4: 1.25,
  h5: 1.2,
  h6: 1.2,
  paragraph: 1.25,
  paragraphBold: 1.25,
  paragraphLink: 1.25,
  paragraphLarge: 1.25,
  paragraphSmall: 1.25,
  paragraphSmallBold: 1.25,
  paragraphExtraSmall: 1.25,
  paragraphExtraSmallBold: 1.25,

  button: 1.25,

  mobileParagraph: 1.25,
  mobileParagraphBold: 1.25,
  mobileParagraphSmall: 18,
  mobileParagraphSmallBold: 18,

  iconSmall: 18,
  iconMedium: 20,
  iconLarge: 29,

  // undefined:
  caption: -1,
  overline: -1,
  fontFamily: -1,
  fontSize: -1,
  fontWeightLight: -1,
  fontWeightRegular: -1,
  fontWeightMedium: -1,
  fontWeightBold: -1,
  htmlFontSize: -1,
  pxToRem: -1,
  body1: -1,
  body2: -1,
  subtitle1: -1,
  subtitle2: -1,
};

const paragraph = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: lineHeights.paragraph + "px",
  letterSpacing: 0,
};

const paragraphBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphBold + "px",
  letterSpacing: 0,
};

const paragraphLink = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphLink + "px",
  letterSpacing: 0,
};

const paragraphSmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphSmall + "px",
  letterSpacing: 0,
};

const paragraphLarge = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphLarge + "px",
  letterSpacing: 0,
};

const paragraphSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphSmallBold + "px",
  letterSpacing: 0,
};

const paragraphExtraSmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphExtraSmall + "px",
  letterSpacing: 0,
};

const paragraphExtraSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphExtraSmallBold + "px",
  letterSpacing: 0,
};

const mobileParagraph = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraph + "px",
  letterSpacing: 0,
};

const mobileParagraphBold = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphBold + "px",
  letterSpacing: 0,
};

const mobileParagraphSmall = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraphSmall + "px",
  letterSpacing: 0,
};

const mobileParagraphSmallBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphSmallBold + "px",
  letterSpacing: 0,
};

const spacing = 8;

const headerHeights = {
  xs: 48,
  sm: 48,
  md: 48,
  lg: 48,
  xl: 48,
};

const pageWidths: { [key in Breakpoint]: number } = {
  xs: 375,
  sm: 414,
  md: 429,
  lg: 792,
  xl: 1280,
};

const contentWidths: { [key in Breakpoint]: number } = {
  xs: pageWidths["xs"] - 48,
  sm: pageWidths["sm"] - 48,
  md: pageWidths["md"] - 48,
  lg: pageWidths["lg"] - 48,
  xl: pageWidths["xl"] - 48,
};

export const defaultThemeOptions: ThemeOptions = {
  spacing,
  palette: paletteOptions,
  typography: {
    fontFamily: "Tahoma",
    fontWeightLight: 400,
    fontSize: 14,
    h1: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: lineHeights.h1,
      letterSpacing: -2,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: lineHeights.h2,
      letterSpacing: -2,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: lineHeights.h3,
      letterSpacing: -1.5,
    },
    h4: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: lineHeights.h4,
      letterSpacing: -1,
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: lineHeights.h5,
      letterSpacing: -0.5,
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: lineHeights.h6,
      letterSpacing: -0.5,
    },
    paragraph: {
      ...paragraph,
    },
    paragraphBold: {
      ...paragraphBold,
    },
    paragraphLink: {
      ...paragraphLink,
    },
    paragraphLarge: {
      ...paragraphLarge,
    },
    paragraphSmall: {
      ...paragraphSmall,
    },
    paragraphSmallBold: {
      ...paragraphSmallBold,
    },
    paragraphExtraSmall: {
      ...paragraphExtraSmall,
    },
    paragraphExtraSmallBold: {
      ...paragraphExtraSmallBold,
    },
    mobileParagraph: {
      ...mobileParagraph,
    },
    mobileParagraphBold: {
      ...mobileParagraphBold,
    },
    mobileParagraphSmall: {
      ...mobileParagraphSmall,
    },
    mobileParagraphSmallBold: {
      ...mobileParagraphSmallBold,
    },
    iconSmall: {
      fontSize: 14,
      lineHeight: lineHeights.iconSmall,
    },
    iconMedium: {
      fontSize: 20,
      lineHeight: lineHeights.iconMedium,
    },
    iconLarge: {
      fontSize: 26,
      lineHeight: lineHeights.iconLarge,
    },
    button: {
      ...paragraphBold,
      textTransform: "none",
    },
    body1: undefined,
    body2: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: breakPointsOptions,
  headerHeights: {
    ...headerHeights,
  },
  contentWidths: contentWidths,
};
