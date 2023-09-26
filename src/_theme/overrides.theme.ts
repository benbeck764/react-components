import { Breakpoint, Theme } from "@mui/material";

export type CustomTheme = Theme;

export type HeaderHeights = { [key in Breakpoint]: number };
export type ContentWidths = { [key in Breakpoint]: number };

export interface CustomThemeOptions {
  headerHeights?: HeaderHeights;
  contentWidths?: ContentWidths;
  [key: string]: unknown;
}

// Utilize TypeScript Module Augmentation to Augment Custom Theme Variables
declare module "@mui/material/styles" {
  interface Theme {
    custom: CustomThemeOptions;
  }

  interface ThemeOptions {
    custom: CustomThemeOptions;
  }

  interface Palette {
    coolGrey: Palette["grey"];
  }

  interface PaletteOptions {
    coolGrey: PaletteOptions["grey"];
  }

  interface TypographyVariants {
    paragraph: React.CSSProperties;
    paragraphBold: React.CSSProperties;
    paragraphLink: React.CSSProperties;
    paragraphLarge: React.CSSProperties;
    paragraphSmall: React.CSSProperties;
    paragraphSmallBold: React.CSSProperties;

    mobileParagraph: React.CSSProperties;
    mobileParagraphBold: React.CSSProperties;
    mobileParagraphSmall: React.CSSProperties;
    mobileParagraphSmallBold: React.CSSProperties;

    iconSmall: React.CSSProperties;
    iconMedium: React.CSSProperties;
    iconLarge: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    paragraph: React.CSSProperties;
    paragraphBold: React.CSSProperties;
    paragraphLink: React.CSSProperties;
    paragraphLarge: React.CSSProperties;
    paragraphSmall: React.CSSProperties;
    paragraphSmallBold: React.CSSProperties;

    mobileParagraph: React.CSSProperties;
    mobileParagraphBold: React.CSSProperties;
    mobileParagraphSmall: React.CSSProperties;
    mobileParagraphSmallBold: React.CSSProperties;

    iconSmall: React.CSSProperties;
    iconMedium: React.CSSProperties;
    iconLarge: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    paragraph: true;
    paragraphBold: true;
    paragraphLink: true;
    paragraphLarge: true;
    paragraphSmall: true;
    paragraphSmallBold: true;

    mobileParagraph: true;
    mobileParagraphBold: true;
    mobileParagraphSmall: true;
    mobileParagraphSmallBold: true;

    iconSmall: true;
    iconMedium: true;
    iconLarge: true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}