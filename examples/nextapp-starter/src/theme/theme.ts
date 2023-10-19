import { Poppins } from "next/font/google";
import { Breakpoint } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import createTheme from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface Theme {
    pageContentMargin?: number;
    pageWidths?: { [key in Breakpoint]: number };
  }

  interface ThemeOptions {
    pageContentMargin?: number;
    pageWidths?: { [key in Breakpoint]: number };
  }
}

const poppins = Poppins({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

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

const options: ThemeOptions = {
  spacing: 8,
  pageContentMargin: 16,
  pageWidths: pageWidths,
  contentWidths: contentWidths,
  typography: {
    fontFamily: poppins.style.fontFamily,
    fontWeightLight: poppins.style.fontWeight,
    h1: {
      fontSize: "clamp(56px, 10vw, 96px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -1,
      wordSpacing: "-0.05em",
    },
    h2: {
      fontSize: "clamp(46px, 8vw, 72px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.025em",
    },
    h3: {
      fontSize: "clamp(30px, 7vw, 56px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.025em",
    },
    h4: {
      fontSize: "clamp(24px, 7vw, 36px)",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.025em",
    },
    h5: {
      fontSize: "clamp(18px, 6.6vw, 24px)",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.025em",
    },
    h6: {
      fontSize: "clamp(14px, 6vw, 18px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: -0.5,
      wordSpacing: "-0.025em",
    },
    paragraph: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: -0.5,
    },
    paragraphBold: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
    },
    paragraphLink: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
    },
    paragraphLarge: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: -0.25,
    },
    paragraphSmall: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: -0.5,
    },
    paragraphSmallBold: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.25,
    },
    paragraphExtraSmall: {
      fontSize: 11,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: -0.5,
    },
    paragraphExtraSmallBold: {
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
