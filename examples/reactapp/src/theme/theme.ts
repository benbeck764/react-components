import { Breakpoint, ThemeOptions, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }

  interface ThemeOptions {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }
}

const options: ThemeOptions = {
  spacing: 8,
  pageContentMargin: 16,
  pageWidths: { xs: 375, sm: 414, md: 429, lg: 792, xl: 1280 },
  typography: {
    fontFamily: "Roboto Mono, Poppins, -apple-system, system-ui, sans-serif",
    fontWeightLight: 400,
    fontSize: 14,
    h1: {
      fontFamily: "Poppins, Sans-serif",
      fontSize: "clamp(56px, 10vw, 96px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -1,
      wordSpacing: "-0.05em",
    },
    h2: {
      fontFamily: "Poppins, Sans-serif",
      fontSize: "clamp(46px, 8vw, 72px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.025em",
    },
    h3: {
      fontFamily: "Poppins, Sans-serif",
      fontSize: "clamp(30px, 7vw, 56px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.025em",
    },
    h4: {
      fontFamily: "Tahoma",
      fontSize: "clamp(24px, 7vw, 36px)",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.25em",
    },
    h5: {
      fontFamily: "Tahoma",
      fontSize: "clamp(20px, 6.6vw, 26px)",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.25em",
    },
    h6: {
      fontFamily: "Tahoma",
      fontSize: "clamp(17px, 6vw, 22px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.25em",
    },
    paragraph: {
      fontFamily: "Tahoma",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: -0.5,
    },
    paragraphBold: {
      fontFamily: "Tahoma",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
    },
    paragraphLink: {
      fontFamily: "Tahoma",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
    },
    paragraphLarge: {
      fontFamily: "Tahoma",
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: -0.75,
    },
    paragraphSmall: {
      fontFamily: "Tahoma",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: -0.5,
    },
    paragraphSmallBold: {
      fontFamily: "Tahoma",
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
    },
    paragraphExtraSmall: {
      fontFamily: "Tahoma",
      fontSize: 11,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: -0.5,
    },
    paragraphExtraSmallBold: {
      fontFamily: "Tahoma",
      fontSize: 11,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
    },
    iconSmall: {
      fontSize: 14,
      lineHeight: 1.3,
    },
    iconMedium: {
      fontSize: 20,
      lineHeight: 1,
    },
    iconLarge: {
      fontSize: 26,
      lineHeight: 1.1,
    },
    button: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const theme = createTheme(options);
