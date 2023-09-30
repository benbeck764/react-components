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
  h1: 1.2,
  h2: 1.2,
  h3: 1.15,
  h4: 1.15,
  h5: 1.1,
  h6: 1.1,
  paragraph: 1.05,
  paragraphBold: 1.05,
  paragraphLink: 1.05,
  paragraphLarge: 1.05,
  paragraphSmall: 1.05,
  paragraphSmallBold: 1.05,
  paragraphExtraSmall: 1.05,
  paragraphExtraSmallBold: 1.05,

  button: 1.05,

  mobileParagraph: 1.05,
  mobileParagraphBold: 1.05,
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
  lineHeight: lineHeights.paragraph,
  letterSpacing: 0,
};

const paragraphBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphBold,
  letterSpacing: 0,
};

const paragraphLink = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphLink,
  letterSpacing: 0,
};

const paragraphSmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphSmall,
  letterSpacing: 0,
};

const paragraphLarge = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphLarge,
  letterSpacing: 0,
};

const paragraphSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphSmallBold,
  letterSpacing: 0,
};

const paragraphExtraSmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphExtraSmall,
  letterSpacing: 0,
};

const paragraphExtraSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphExtraSmallBold,
  letterSpacing: 0,
};

const mobileParagraph = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraph,
  letterSpacing: 0,
};

const mobileParagraphBold = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphBold,
  letterSpacing: 0,
};

const mobileParagraphSmall = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraphSmall,
  letterSpacing: 0,
};

const mobileParagraphSmallBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphSmallBold,
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
